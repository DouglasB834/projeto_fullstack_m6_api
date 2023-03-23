import { FormStyled } from "./form";
import { ReactNode } from "react";
import { IpropsChldres } from "../interfaces";

export const Loginform = ({ children }: IpropsChldres) => {
  return <FormStyled>{children}</FormStyled>;
};
