import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../contexts/contextRequestUser";
import { ModalEditUser } from "../Modelas/ModalEditUser";
import { ModalMyAccount } from "../Modelas/ModalMyAccount";

export const HeaderForm = () => {
  const navagate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("@phonebook:token");
    localStorage.removeItem("phonebook:id");
    navagate("/");
  };

  const { user } = useRequest();
  const token = localStorage.getItem("@phonebook:token");
  useEffect(() => {
    if (!token) {
      navagate("/", { replace: true });
    }
  });

  return (
    <>
      <Box bg={"var(--color-blue2)"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box alignItems={"center"}>
            <Text as={"span"} fontWeight={"bold"} fontSize={17} color={"white"}>
              <a href="http://localhost:5173/home">PhoneBook</a>
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <>
              <Menu>
                <Text
                  color={"var(--color-white)"}
                  css={{
                    maxWidth: "130px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Hi {user?.name}
                </Text>

                <MenuButton
                  as={Button}
                  rounded={"full"}
                  cursor={"pointer"}
                  variant="link"
                  minW={0}
                >
                  <Avatar name={user?.name} size={"sm"} src={""} />
                </MenuButton>

                <MenuList m={-3.5} mt={"4px"} bg={"var(--color-blue2)"}>
                  <MenuGroup
                    letterSpacing={1}
                    fontSize={".9em"}
                    color={"var(--color-text1)"}
                    title="Profile"
                  >
                    <ModalMyAccount />
                    <ModalEditUser />
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup
                    letterSpacing={1}
                    fontSize={".9em"}
                    color={"var(--color-text1)"}
                    title="Help"
                  >
                    <MenuItem>
                      <Link
                        href="https://douglasb834.github.io/Documentation/"
                        isExternal
                      >
                        Doc <ExternalLinkIcon />
                      </Link>
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup
                    letterSpacing={1}
                    fontSize={".9em"}
                    color={"var(--color-text1)"}
                    title="Logout"
                  >
                    <MenuItem fontSize={"sm"} onClick={Logout}>
                      Logout
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
