import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextData";

export const SeactContact = () => {
  const { setSeach } = useContext(DataContext);

  return (
    <InputGroup maxW={250}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color={"var(--color2)"} />}
      />
      <Input
        onChange={(e) => {
          setSeach(e.target.value);
        }}
        _hover={{ borderColor: "var(--color2)" }}
        type="text"
        css={{ "::placeholder": { color: "var(--color-text)" } }}
        placeholder="Search Ccontact"
      />
    </InputGroup>
  );
};
