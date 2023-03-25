import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/axios";
import { IChldres, IUser, IUserLogin, IUserRegister } from "../interfaces";
import { Box, useToast } from "@chakra-ui/react";
import { DataContext } from "./ContextData";

export interface iRequestProvid {
  login: (data: IUserLogin) => void;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  registerUser: (data: IUserRegister) => void;
}

export const ContextRequestUser = createContext({} as iRequestProvid);

export const ContextRequestUserProvider = ({ children }: IChldres) => {
  // const { setUser } = useContext(DataContext);
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  const toast = useToast();

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

  return (
    <ContextRequestUser.Provider value={{ login, registerUser, user, setUser }}>
      {children}
    </ContextRequestUser.Provider>
  );
};

//criando meu hook
export const useRequest = () => useContext(ContextRequestUser);
