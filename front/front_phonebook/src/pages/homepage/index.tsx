import { useForm } from "react-hook-form";
import { StyledMainLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validadorRequest";
import { IUserLogin } from "../../interfaces";

import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import imgPena from "../../assets/pena.png";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Loginform } from "../../components";
import { Modelrecorver } from "../../components/ModelRecorver";
import { useRequest } from "../../contexts/contextUser";
import { Modalregister } from "../../components/ModalRegister";
import { useNavigate } from "react-router-dom";

StyledMainLogin;
export const HomePage = () => {
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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    // <Center>
    <StyledMainLogin>
      <h1>Welcome to Your Phonebook</h1>
      <section className="container_login">
        <div className="box_content">
          <h2>Welcome Back</h2>
          <figcaption>
            <img src={imgPena} alt="" />
          </figcaption>
          <p>
            Don't waste any more time with just a few clicks, you can have
            access to a complete phone book. Sign up or login
          </p>
        </div>
        <Loginform>
          <FormControl
            className="formLogin"
            isRequired
            onSubmit={handleSubmit(onSubmitForm)}
          >
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
                  className="btnEya"
                  variant={"ghost"}
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
          <Checkbox defaultChecked>save login?</Checkbox>
          <div className="container_links">
            <Button
              color={"blue.300"}
              className="btnLogin"
              onClick={handleSubmit(onSubmitForm)}
            >
              Login
            </Button>
            <p>
              Forgot your password? ➡
              <span>
                <Modelrecorver />
              </span>
            </p>
            <span>
              <Modalregister />
              <ExternalLinkIcon mx="2px" />
            </span>
          </div>
        </Loginform>
      </section>
    </StyledMainLogin>
    // </Center>
  );
};
