import {
  Button,
  FormControl,
  FormLabel,
  Input,
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

export const ModalAddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <ModalContent>
          <ModalHeader>Add new Contact </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="E-mail" />
            </FormControl>
          </ModalBody>

          <ModalFooter display={"block"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
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
