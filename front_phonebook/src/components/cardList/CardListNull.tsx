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
export const CardListNull = () => {
  return (
    <Card w={"240px"} h={"335px"} maxW="17rem">
      <CardBody>
        <div className="imgContact">
          <Avatar name="N" />
        </div>
        <Stack mt="6" spacing="1">
          <Heading size="sm">don't have any contacts saved yet</Heading>
          <Text>Name: Contact</Text>
          <Text>Phone: Contact</Text>
          <Text
            css={{
              maxWidth: "190px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            email: Contact
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
          >
            Delete
          </Button>
          <Button bg={"blue.200"} variant="ghost" colorScheme="blue">
            Edite
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
