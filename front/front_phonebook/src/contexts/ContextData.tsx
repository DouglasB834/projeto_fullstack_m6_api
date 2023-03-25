import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { api } from "../Api/axios";
import { IChldres, IContacts, IListContactUser, IUser } from "../interfaces";
import { useRequest } from "./contextRequestUser";

export interface IContactsProvide {
  listContacts: () => void;
  contacts: IListContactUser[];
}

export const DataContext = createContext({} as IContactsProvide);

export const DataProvider = ({ children }: IChldres) => {
  const token: string | null = localStorage.getItem("@phonebook:token");
  const idUser = localStorage.getItem("@phonebook:id");
  const { pathname } = useLocation();
  const { setUser, user } = useRequest();
  const [contacts, setContacts] = useState<IListContactUser[]>([]);

  const listContacts = async (): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get("/contact");
      console.log(data[0].contacts);

      setUser(data[0]);
      setContacts(data[0].contacts);
    } catch (error) {
      console.log(error, "list contacts failed");
    }
  };

  useEffect(() => {
    if (pathname.includes("/home")) {
      listContacts();
    }
  }, [token]);

  return (
    <DataContext.Provider value={{ listContacts, contacts }}>
      {children}
    </DataContext.Provider>
  );
};

// export const useContactContext = () => {
//   const context = useContext(DataContext)
// };
