import {
  Button,
  Center,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../contexts/ContextData";
import { IUserUpdate } from "../../interfaces";
import { UpdadeContactSchema } from "../../ValidadeSchemas/validationSchema";

export const Modalregister = ({ id }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updadeContact } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(UpdadeContactSchema),
  });

  const onUpdadeContact = (id: string, data: IUserUpdate) => {
    updadeContact(id, data);
    onClose();
  };

  return (
    <>
      <span onClick={onOpen}>Edite</span>

      <Modal isOpen={isOpen} onClose={onClose} colorScheme="blue">
        <ModalOverlay />
        <ModalContent className="container_modal">
          <ModalHeader alignSelf={"center"}>Register </ModalHeader>

          <ModalCloseButton />

          <ModalBody bg={"var(--color-blue3)"}>
            <form
              className="formLogin"
              // isRequired
              onSubmit={handleSubmit((data) => onUpdadeContact(id, data))}
            >
              <Center>
                <h2>There is little left to start</h2>
                <Text
                  color={"--color-text"}
                  fontSize={"1.1rem"}
                  fontWeight={600}
                >
                  Create your account
                </Text>
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
              <Button
                w={"100%"}
                m={"1rem auto"}
                alignSelf={"center"}
                color={"var(--color-black)"}
                bg={"var(--color5)"}
                className="btnLogin"
                _hover={{ bg: "var(--color2)", color: "var(--color-white)" }}
                type="submit"
              >
                registar
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
