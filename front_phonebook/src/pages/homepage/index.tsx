import { useForm } from "react-hook-form";
import { StyledMainLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validadorRequest";
import { IUserLogin } from "../../interfaces";

import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import imgBg from "../../assets/imgbg.png";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Loginform } from "../../components";
import { ModelRecorver } from "../../components/Modelas/ModelRecorver";
import { useRequest } from "../../contexts/contextRequestUser";
import { Modalregister } from "../../components/Modelas/ModalRegister";
import { useNavigate } from "react-router-dom";

import imgflor from "../../assets/fundo_img.png";

StyledMainLogin;
export const HomePage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useRequest();

  const onSubmitForm = (data: IUserLogin) => {
    login(data);
  };
  const token = localStorage.getItem("@phonebook:token");

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    <StyledMainLogin aria-label="login page">
      <Text mt={"1rem"} as={"h1"} letterSpacing={1}>
        Welcome to Your Phonebook
        <Divider />
      </Text>
      <section className="container_login">
        <Box borderRadius="5px" className="box_content">
          <figcaption>
            <img
              src={imgBg}
              alt="two people messing with their phone book"
              title="two people messing with their phone book"
            />
          </figcaption>
          <p>
            Don't waste any more time with just a few clicks, you can have
            access to a complete phone book. Sign up or login
          </p>
        </Box>
        <Loginform>
          <FormControl
            className="formLogin"
            isRequired
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div>
              <img
                src={imgflor}
                alt="animated girl image"
                title="animated girl image"
              />
            </div>

            <div className="title">
              <h2>Welcome Back</h2>
              <p>Login to your account</p>
            </div>

            <FormLabel marginTop={"1rem"} fontSize=".9rem">
              E-mail
            </FormLabel>
            <Input
              _placeholder={{ color: "white" }}
              placeholder="Email"
              required
              size="sm"
              borderRadius={"5px"}
              focusBorderColor="blue.300"
              type="email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <FormLabel marginTop={"1rem"}>Password</FormLabel>
            <InputGroup>
              <Input
                _placeholder={{ color: "white" }}
                placeholder="password"
                size="sm"
                borderRadius={"5px"}
                required
                focusBorderColor="blue.300"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <InputRightElement>
                <Button
                  size={"xs"}
                  className="btnEya"
                  variant={"ghost"}
                  color={"var(--color-text2)"}
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <p>{errors.password?.message}</p>
          </FormControl>
          <div className="content_check_model">
            <Checkbox defaultChecked>save login?</Checkbox>
            <span>
              <Modalregister />
              <ExternalLinkIcon mx="2px" />
            </span>
          </div>
          <div className="container_links">
            <Button
              size={"sm"}
              textAlign={"center"}
              color={"blue.300"}
              className="btnLogin"
              fontWeight={400}
              width={"120px"}
              _hover={{ bg: "var(--color2)", color: "var(--color-white)" }}
              onClick={handleSubmit(onSubmitForm)}
            >
              Login
            </Button>
            <p>
              Forgot your password? ➡
              <span>
                <ModelRecorver />
              </span>
            </p>
          </div>
        </Loginform>
      </section>
    </StyledMainLogin>
  );
};
