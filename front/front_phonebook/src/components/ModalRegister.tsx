import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
import { useRequest } from "../contexts/contextUser";
import { IUserRegister } from "../interfaces";
import { registerSchema } from "../pages/homepage/validadorRequest";

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

      <Modal isOpen={isOpen} onClose={onClose} colorScheme="blue">
        <ModalOverlay />
        <ModalContent className="container_modal">
          <ModalHeader>Register </ModalHeader>
          <ModalCloseButton />
          <div className="register_modal">
            <ModalBody>
              <div>
                <FormControl
                  className="formLogin"
                  isRequired
                  onSubmit={handleSubmit(onSubmitForm)}
                >
                  <Center>
                    <div className="title">
                      <h2>There is little left to start</h2>
                      <p>Create your account </p>
                    </div>
                  </Center>

                  <FormLabel marginTop={"1rem"} fontSize=".9rem">
                    Name
                  </FormLabel>
                  <Input
                    _placeholder={{ color: "white" }}
                    placeholder="Name..."
                    required
                    size="sm"
                    borderRadius={"5px"}
                    focusBorderColor="blue.300"
                    type="text"
                    {...register("name")}
                  />
                  <p>{errors.name?.message}</p>

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

                  <FormLabel marginTop={"1rem"}>Confirm password</FormLabel>
                  <InputGroup>
                    <Input
                      _placeholder={{ color: "white" }}
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
                        className="btnEya"
                        variant={"ghost"}
                        onClick={() => {
                          setConfirmPassword(!confirmPassword);
                        }}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <p>{errors.passwordConfirmed?.message}</p>

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

                  <FormLabel marginTop={"1rem"} fontSize=".9rem">
                    Phonne
                  </FormLabel>
                  <Input
                    color="white"
                    _placeholder={{ color: "white" }}
                    placeholder="Phone"
                    required
                    size="sm"
                    borderRadius={"5px"}
                    focusBorderColor="blue.300"
                    type="text"
                    {...register("phone")}
                  />
                  <p>{errors.phone?.message}</p>
                </FormControl>

                <div className="container_links">
                  <Button
                    color={"blue.300"}
                    className="btnLogin"
                    onClick={handleSubmit(onSubmitForm)}
                  >
                    registar
                  </Button>
                </div>
              </div>
            </ModalBody>
          </div>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
