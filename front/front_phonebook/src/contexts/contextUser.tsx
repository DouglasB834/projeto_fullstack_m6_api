import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/axios";
import { IChldres, IUserLogin, IUserRegister } from "../interfaces";
import { Box, useToast } from "@chakra-ui/react";

export interface iRequestProvid {
  login: (data: IUserLogin) => void;

  //   onSubmitRegister: (data: IUserRegister) => void;
}

export const ContextUser = createContext({} as iRequestProvid);

export const ContextUserProvider = ({ children }: IChldres) => {
  const navigate = useNavigate();
  const toast = useToast();

  const login = async (userData: IUserLogin) => {
    try {
      const response = await api.post("/login", userData);
      const { user, token } = response.data;

      console.log(response);

      // localStorage.setItem("@phonebook:id", user.id);
      localStorage.setItem("@phonebook:token", token);
      navigate("/", { replace: true });
      toast({
        title: "Login sucess",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            logging...
          </Box>
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContextUser.Provider value={{ login }}>{children}</ContextUser.Provider>
  );
};

//criando meu hook
export const useRequest = () => useContext(ContextUser);
