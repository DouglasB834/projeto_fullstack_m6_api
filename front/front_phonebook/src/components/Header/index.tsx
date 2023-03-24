import {
  CloseIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Text,
  Wrap,
  WrapItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../contexts/contextUser";

export const HeaderForm = () => {
  const navagate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("@phonebook:token");
    localStorage.removeItem("phonebook:id");
    navagate("/");
  };

  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const {} = useRequest();
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
            <Text fontWeight={"bold"} fontSize={17} color={"white"}>
              PhoneBook
            </Text>
          </Box>
          {/* <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
            aria-label={"Open Menu"}
          /> */}
          <Flex alignItems={"center"}>
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  cursor={"pointer"}
                  variant="link"
                  minW={0}
                >
                  <Wrap className="btn_settings_menu">
                    <WrapItem>
                      <Avatar name={"Douglas Borges"} size={"sm"} src={""} />
                    </WrapItem>
                  </Wrap>
                </MenuButton>

                <MenuList m={-4} mt={"4px"} bg={"var(--color-blue2)"}>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem icon={<RepeatIcon />}>Setting</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>
                      <Link
                        href="https://douglasb834.github.io/Documentation/"
                        isExternal
                      >
                        Doc <ExternalLinkIcon />
                      </Link>
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Logout">
                    <MenuItem
                      fontSize={"sm"}
                      //   as={Button}
                      onClick={Logout}
                    >
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
