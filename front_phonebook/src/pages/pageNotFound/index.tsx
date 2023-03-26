import { Box, Flex, Text } from "@chakra-ui/react";
import pageNotfound from "../../assets/nd_small.gif";
import { Image } from "@chakra-ui/react";

export const PageNotFound = () => {
  return (
    <Flex
      h={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"2rem"}
    >
      <Image w={"50%"} src={pageNotfound} alt="Dan Abramov" />
      <Text as={"h1"} fontSize={"2rem"} color={"var(--color2)"}>
        Page Not Found
      </Text>
    </Flex>
  );
};
