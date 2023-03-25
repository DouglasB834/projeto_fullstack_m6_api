import {
  Button,
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

export const ModalMyAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <ModalHeader alignSelf={"center"}>Recover Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

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
