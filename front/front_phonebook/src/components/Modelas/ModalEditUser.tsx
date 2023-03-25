import { AtSignIcon, ChatIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRequest } from "../../contexts/contextRequestUser";
import { IUser } from "../../interfaces";

export const ModalEditUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useRequest();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="auto"
      backdropInvert="20%"
      backdropBlur="md"
    />
  );

  const handleEditUser = (data: IUser) => {
    onClose();
  };

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
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
          setOverlay(OverlayOne);
        }}
      >
        Setting
      </Text>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>edit your account!</Text>
            <FormControl isRequired>
              <FormLabel marginTop={"1rem"} fontSize=".9rem">
                Name
              </FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`${user?.name}`}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                  // {...register("name")}
                />
                {/* <p>{errors.name?.message}</p> */}
                <InputRightElement
                  pointerEvents={"none"}
                  children={<ChatIcon color={"gray.300"} />}
                />
              </InputGroup>

              <FormLabel>email</FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`${user?.email}`}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<AtSignIcon color="gray.300" />}
                />
              </InputGroup>

              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder={`${user.phone}`}
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="text"
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<PhoneIcon color="gray.300" />}
                />
              </InputGroup>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder="Password..."
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="password"
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<LockIcon color="gray.300" />}
                />
              </InputGroup>
              <Button
                w={"100%"}
                m={"1rem auto "}
                _hover={{ bg: "var(--color2)", color: "var(--color-white)" }}
              >
                Edit Profile
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
