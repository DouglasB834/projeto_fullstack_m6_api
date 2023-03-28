import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRequest } from "../../contexts/contextRequestUser";
import { IUserRegister } from "../../interfaces";
import { registerSchema } from "../../pages/homepage/validadorRequest";

export const Modalregister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const { registerUser } = useRequest();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitForm = (data: IUserRegister) => {
    registerUser(data);
    onClose();
  };

  return (
    <>
      <span onClick={onOpen}>Let's go Sign up</span>

      <Modal
        aria-labelledby="title"
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="blue"
      >
        <ModalOverlay />
        <ModalContent className="container_modal">
          <ModalHeader id="title" alignSelf={"center"}>
            Register
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody borderRadius={5} bg={"var(--color-blue3)"}>
            <FormControl
              className="formLogin"
              isRequired
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <Center display={"flex"} flexDirection="column" mt={2}>
                <Text fontWeight={600} fontSize={"1.1rem"} as={"h2"}>
                  Create your account{" "}
                </Text>
                <Text
                  letterSpacing={"1px"}
                  color={"var(--color1)"}
                  fontWeight={500}
                >
                  There is little left to start
                </Text>
              </Center>

              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                Name
              </FormLabel>
              <Input
                color="white"
                _placeholder={{ color: "var(--color1)" }}
                placeholder="Name..."
                required
                size="sm"
                borderRadius={"5px"}
                focusBorderColor="blue.300"
                type="text"
                {...register("name")}
              />
              <p className="formErrorMessage">{errors.name?.message}</p>

              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                E-mail
              </FormLabel>
              <Input
                color="white"
                _placeholder={{ color: "var(--color1)" }}
                placeholder="Email"
                required
                size="sm"
                borderRadius={"5px"}
                focusBorderColor="blue.300"
                type="email"
                {...register("email")}
              />
              <p className="formErrorMessage">{errors.email?.message}</p>

              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                Phonne
              </FormLabel>
              <Input
                color="white"
                _placeholder={{ color: "var(--color1)" }}
                placeholder="Phone"
                required
                size="sm"
                borderRadius={"5px"}
                focusBorderColor="blue.300"
                type="text"
                {...register("phone")}
              />

              <p className="formErrorMessage">{errors.phone?.message}</p>

              <FormLabel marginTop={"1rem"}>Password</FormLabel>
              <InputGroup>
                <Input
                  color="white"
                  _placeholder={{ color: "var(--color1)" }}
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
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <p className="formErrorMessage">{errors.password?.message}</p>

              <FormLabel marginTop={"1rem"}>Confirm password</FormLabel>
              <InputGroup>
                <Input
                  color="white"
                  _placeholder={{ color: "var(--color1)" }}
                  placeholder="confirm password"
                  size="sm"
                  borderRadius={"5px"}
                  required
                  focusBorderColor="blue.300"
                  type={confirmPassword ? "text" : "password"}
                  {...register("passwordConfirmed")}
                />

                <InputRightElement>
                  <Button
                    size={"xs"}
                    className="btnEya"
                    variant={"ghost"}
                    color={"var(--color-text)"}
                    onClick={() => {
                      setConfirmPassword(!confirmPassword);
                    }}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <p className="formErrorMessage">
                {errors.passwordConfirmed?.message}
              </p>
            </FormControl>

            <div className="container_links">
              <Button
                w={"100%"}
                m={"1rem auto"}
                alignSelf={"center"}
                color={"var(--color-black)"}
                bg={"var(--color5)"}
                className="btnLogin"
                _hover={{ bg: "var(--color1)", color: "var(--color-white)" }}
                onClick={handleSubmit(onSubmitForm)}
              >
                registar
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
