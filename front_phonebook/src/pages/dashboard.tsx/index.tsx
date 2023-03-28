import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { CardList } from "../../components/cardList";
import { HeaderForm } from "../../components/Header";
import { ModalAddContact } from "../../components/Modelas/ModalAddContact";
import { DashBoardMain, UlStyled } from "./style";
import imgbg from "../../assets/girlsbg.png";
import imgbg2 from "../../assets/groupbg.png";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextData";
import { CardListNull } from "../../components/cardList/CardListNull";
import { SeactContact } from "../../components/Search";

export const Dashboard = () => {
  const { contacts, search } = useContext(DataContext);

  return (
    <>
      <HeaderForm />
      <Text
        w={"16ch"}
        m={"auto"}
        pt={5}
        as={"h2"}
        fontSize={"1.5rem"}
        align={"center"}
      >
        Your Phone books
        <Divider color={"var(--color2)"} />
      </Text>
      <DashBoardMain>
        <Box position={"relative"}>
          <Flex
            maxW={"95%"}
            m={"1rem auto"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box className="girlBg" position={"absolute"} bottom={0} left={0}>
              <img src={imgbg} alt="img bg" />
            </Box>
            <Box position={"absolute"} bottom={-5} right={0}>
              <img src={imgbg2} alt="img bg" />
            </Box>
            <Box>
              <ModalAddContact />
            </Box>
            <SeactContact />
          </Flex>

          <UlStyled>
            {contacts.length > 0 ? (
              search == "" ? (
                contacts.map((contact) => {
                  return <CardList key={contact.id} contact={contact} />;
                })
              ) : (
                contacts
                  ?.filter((e) => {
                    if (e.name.includes(search) || e.phone.includes(search)) {
                      return e;
                    }
                  })
                  .map((contact) => {
                    return <CardList key={contact.id} contact={contact} />;
                  })
              )
            ) : (
              <CardListNull />
            )}
          </UlStyled>
        </Box>
      </DashBoardMain>
    </>
  );
};
