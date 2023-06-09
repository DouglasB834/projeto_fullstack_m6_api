import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ModalAddContact } from "../Modelas/ModalAddContact";
import imgbg from "../../assets/girlsbg.png";
import imgbg2 from "../../assets/groupbg.png";

export const AddContactSearch = () => {
  return (
    <Flex
      maxW={"95%"}
      m={"1rem auto"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box className="girlBg" position={"absolute"} bottom={0} left={0}>
        <img src={imgbg} alt="" />
      </Box>
      <Box position={"absolute"} bottom={-5} right={0}>
        <img src={imgbg2} alt="" />
      </Box>
      <Box>
        <ModalAddContact />
      </Box>

      <InputGroup maxW={250}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color={"var(--color2)"} />}
        />
        <Input
          _hover={{ borderColor: "var(--color2)" }}
          type="text"
          css={{ "::placeholder": { color: "var(--color-text)" } }}
          placeholder="Search Ccontact"
        />
      </InputGroup>
    </Flex>
  );
};
