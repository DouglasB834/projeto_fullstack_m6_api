import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/axios";
import {
  IChldres,
  IUser,
  IUserLogin,
  IUserRegister,
  IUserUpdate,
} from "../interfaces";
import { Box, useToast } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { AxiosError } from "axios";

export interface iRequestProvid {
  login: (data: IUserLogin) => void;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  registerUser: (data: IUserRegister) => void;
  updateUser: (data: IUserUpdate) => void;
  deleteUser: () => void;
  privateRoute: boolean;
}

export const ContextRequestUser = createContext({} as iRequestProvid);

export const ContextRequestUserProvider = ({ children }: IChldres) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  const toast = useToast();
  const navegate = useNavigate();
  const { pathname } = useLocation();
  const token: string | null = localStorage.getItem("@phonebook:token");

  const login = async (userData: IUserLogin) => {
    try {
      const response = await api.post("/login", userData);
      const { user, token } = response.data;

      localStorage.setItem("@phonebook:id", user.id);
      localStorage.setItem("@phonebook:token", token);
      setUser(user);
      navigate("/home", { replace: true });
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

  const registerUser = async (data: IUserRegister) => {
    try {
      const response = await api.post<IUserRegister>("/users", data);
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Create success...
          </Box>
        ),
      });
      navigate("/");
    } catch (error: any) {
      const toastmsg = error.response.data.message;
      toast({
        title: "error register",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            {`${toastmsg}`}
          </Box>
        ),
      });
    }
  };

  const updateUser = async (data: IUserUpdate) => {
    try {
      const response = await api.patch("/users", data);
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Create success...
          </Box>
        ),
      });
      setUser(response.data);
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

  const deleteUser = async () => {
    try {
      await api.delete("/users");
      toast({
        title: "Create success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Success delete...
          </Box>
        ),
      });
      localStorage.removeItem("@phonebook:token");
      localStorage.removeItem("phonebook:id");
      navegate("/");
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

  return (
    <ContextRequestUser.Provider
      value={{
        login,
        registerUser,
        user,
        setUser,
        updateUser,
        deleteUser,
        privateRoute: !!token,
      }}
    >
      {children}
    </ContextRequestUser.Provider>
  );
};

export const useRequest = () => useContext(ContextRequestUser);
