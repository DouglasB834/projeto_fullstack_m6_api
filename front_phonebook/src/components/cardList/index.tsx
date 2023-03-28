import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextData";
import { Modalregister } from "../Modelas/ModalUpdateContact";
export const CardList = ({ contact }: any) => {
  const { deleteContact } = useContext(DataContext);

  return (
    <Card w={"240px"} h={"335px"} maxW="17rem">
      <CardBody>
        <div className="imgContact">
          <Avatar name={contact?.name} />
        </div>
        <Stack mt="6" spacing="1">
          <Heading size="sm">Contact</Heading>
          <Text>Name: {contact?.name}</Text>
          <Text>Phone: {contact?.phone}</Text>
          <Text
            css={{
              maxWidth: "190px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            email: {contact?.email}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          w={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button
            css={{ background: "var(--color1)", color: "red" }}
            variant="solid"
            // colorScheme="blue"
            onClick={() => deleteContact(contact?.id)}
          >
            Delete
          </Button>
          <Button bg={"blue.200"} variant="ghost" colorScheme="blue">
            <Modalregister id={contact?.id} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
