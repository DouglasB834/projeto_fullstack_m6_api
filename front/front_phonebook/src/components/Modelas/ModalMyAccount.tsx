import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRequest } from "../../contexts/contextRequestUser";

export const ModalMyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useRequest();

  return (
    <>
      <Text
        cursor={"pointer"}
        borderTop={"1px solid black"}
        p={"5px 11px"}
        bg={"white"}
        _hover={{ bg: "var(--color5)" }}
        onClick={() => {
          onOpen();
        }}
      >
        My Account
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>My Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            justifyContent={"center"}
            borderRadius={5}
            bg={"var(--color5)"}
            w={"90%"}
            m={"auto"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              gap={3}
              alignSelf={"center"}
              maxW={"100%"}
            >
              <Avatar name={user?.name} src="" />
              <Text>My name: {user?.name}</Text>
              <Text>My Email: {user?.email}</Text>
              <Text>My phone: {user?.phone}</Text>
            </Flex>
          </ModalBody>

          <ModalFooter alignSelf={"center"} display={"block"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
