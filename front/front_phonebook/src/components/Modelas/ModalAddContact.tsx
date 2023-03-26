import { AtSignIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
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
import { useContext, useRef } from "react";
import { DataContext } from "../../contexts/ContextData";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IContacts } from "../../interfaces";
import { CreateContactSchema } from "../../ValidadeSchemas/validationSchema";

export const ModalAddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContacts>({
    resolver: yupResolver(CreateContactSchema),
  });
  const { createContact } = useContext(DataContext);

  const handleCreatContact = (data: IContacts) => {
    createContact(data);
    reset();
    onClose();
  };

  return (
    <>
      <Button
        border="solid 1px   var(--color2)"
        _hover={{ bg: "var(--color4)", color: "var(--color2)" }}
        onClick={onOpen}
      >
        Add Contact
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"95%"}>
          <ModalHeader alignSelf={"center"}>Add new Contact </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl onSubmit={handleSubmit(handleCreatContact)}>
              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                Name
              </FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`name `}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                  {...register("name")}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<ChatIcon color={"gray.300"} />}
                />
              </InputGroup>
              <p>{errors.name?.message}</p>
              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                E-mail
              </FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`E-mail... `}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                  {...register("email")}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<AtSignIcon color="gray.300" />}
                />
              </InputGroup>
              <p>{errors.email?.message}</p>
              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                Phone
              </FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`Phone number `}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                  {...register("phone")}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<PhoneIcon color="gray.300" />}
                />
              </InputGroup>
              <p>{errors.phone?.message}</p>
            </FormControl>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit(handleCreatContact)}
            >
              Enviar
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
