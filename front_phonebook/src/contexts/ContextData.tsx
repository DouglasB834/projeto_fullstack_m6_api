import { Box, useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../Api/axios";
import {
  IChldres,
  IContacts,
  IContacUpdade,
  IListContactUser,
} from "../interfaces";
import { useRequest } from "./contextRequestUser";

export interface IContactsProvide {
  listContacts: () => void;
  contacts: IListContactUser[];
  deleteContact: (id: string) => void;
  createContact: (data: IContacts) => void;
  updadeContact: (id: string, data: IContacUpdade) => void;
  search: string;
  setSeach: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext({} as IContactsProvide);

export const DataProvider = ({ children }: IChldres) => {
  const token: string | null = localStorage.getItem("@phonebook:token");
  const { pathname } = useLocation();
  const { setUser } = useRequest();
  const [contacts, setContacts] = useState<IListContactUser[]>([]);
  const toast = useToast();
  const [state, setState] = useState(false);
  const [search, setSeach] = useState<string>("");

  const listContacts = async (): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/contact");
      setState(true);
      setUser(data[0]);
      setContacts(data[0].contacts);
    } catch (error) {
      console.log(error, "list contacts failed");
    }
    setState(false);
  };

  const updadeContact = async (id: string, data: IContacUpdade) => {
    try {
      await api.patch(`/contact/${id}`, data);
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Create Contact
          </Box>
        ),
      });
    } catch (error: any) {
      const toastmsg = error.response.data.message;
      toast({
        title: "error loging",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {`${toastmsg}`}
          </Box>
        ),
      });
    }
    listContacts();
  };

  const createContact = async (data: IContacts) => {
    try {
      await api.post(`/contact/`, data);
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Create Contact
          </Box>
        ),
      });
    } catch (error: any) {
      const toastmsg = error.response.data.message;
      toast({
        title: "error loging",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {`${toastmsg}`}
          </Box>
        ),
      });
    } finally {
      listContacts();
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await api.delete(`/contact/${id}`);
      setState(true);
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Delet success...
          </Box>
        ),
      });
    } catch (error: any) {
      const toastmsg = error.response.data.message;
      toast({
        title: "error loging",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {`${toastmsg}`}
          </Box>
        ),
      });
    }
  };

  useEffect(() => {
    if (pathname.includes("/home")) {
      listContacts();
    }
  }, [state, token]);

  return (
    <DataContext.Provider
      value={{
        listContacts,
        contacts,
        deleteContact,
        createContact,
        updadeContact,
        search,
        setSeach,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
