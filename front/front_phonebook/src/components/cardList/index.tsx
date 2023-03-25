import {
  Avatar,
  Box,
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

export const CardList = () => {
  return (
    <Card maxH={335} maxW="17rem">
      <CardBody>
        <div className="imgContact">
          <Avatar name="jujuba ju" />
        </div>
        <Stack mt="6" spacing="1">
          <Heading size="sm">Contact</Heading>
          <Text>Name: douglas</Text>
          <Text>Phone: 21 983003101</Text>
          <Text>email: douglas_compras_borges09@hotmail.com</Text>
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
          >
            Delete
          </Button>
          <Button bg={"blue.200"} variant="ghost" colorScheme="blue">
            Editar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
