import { useForm } from "react-hook-form";
import { FormStyled } from "../../components/form";
import { StyledMainLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginValidador";
import { IUserLogin } from "../../interfaces";
import * as yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import imgPena from "../../assets/pena.png";
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Loginform } from "../../components";
import { Link } from "react-router-dom";
import { Modelrecorver } from "../../components/Modelrecorver";

StyledMainLogin;
export const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitForm = (data: IUserLogin) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // <Center>
    <StyledMainLogin>
      <h1>Welcome Your Phonebook</h1>
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
            <Button className="btnLogin" onClick={handleSubmit(onSubmitForm)}>
              Login
            </Button>
            <p>
              Forgot your password? ➡
              <span>
                <Modelrecorver />
              </span>
            </p>
            <Link to="register">Let's go Sign up</Link>
          </div>
        </Loginform>
      </section>
    </StyledMainLogin>
    // </Center>
  );
};
