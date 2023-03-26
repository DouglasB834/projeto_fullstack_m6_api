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
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRequest } from "../../contexts/contextRequestUser";
import { IUser, IUserUpdate } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdadeSchema } from "../../ValidadeSchemas/validationSchema";

export const ModalEditUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, updateUser } = useRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserUpdate>({
    resolver: yupResolver(UpdadeSchema),
  });

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="auto"
      backdropInvert="20%"
      backdropBlur="md"
    />
  );

  const handleUpdadetUser = (data: IUserUpdate) => {
    updateUser(data);
    reset();
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

            <FormControl isRequired onSubmit={handleSubmit(handleUpdadetUser)}>
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
                  {...register("name")}
                  defaultValue={user?.name}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<ChatIcon color={"gray.300"} />}
                />
              </InputGroup>
              <p>{errors.name?.message}</p>

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
                  {...register("email")}
                  defaultValue={user?.email}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<AtSignIcon color="gray.300" />}
                />
              </InputGroup>
              <p>{errors.email?.message}</p>

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
                  {...register("phone")}
                  defaultValue={user?.phone}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<PhoneIcon color="gray.300" />}
                />
              </InputGroup>
              <p>{errors.phone?.message}</p>

              <FormLabel> Confime password</FormLabel>
              <InputGroup>
                <Input
                  _placeholder={{ color: "var(color-text)" }}
                  placeholder="Password..."
                  required
                  size="sm"
                  borderRadius={"5px"}
                  focusBorderColor="blue.300"
                  type="password"
                  {...register("password")}
                />
                <InputRightElement
                  pointerEvents={"none"}
                  children={<LockIcon color="gray.300" />}
                />
              </InputGroup>
              <p>{errors.password?.message}</p>

              <Button
                w={"100%"}
                m={"1rem auto "}
                _hover={{ bg: "var(--color2)", color: "var(--color-white)" }}
                type={"submit"}
                onClick={handleSubmit(handleUpdadetUser)}
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
