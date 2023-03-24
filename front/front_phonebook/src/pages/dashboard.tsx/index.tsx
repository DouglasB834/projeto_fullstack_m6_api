import { HeaderForm } from "../../components/Header";
import { DashBoardMain } from "./style";

export const Dashboard = () => {
  return (
    <>
      <DashBoardMain>
        <HeaderForm />
        <div className="logo"></div>

        <h1>Bem vindo Douglas</h1>
      </DashBoardMain>
    </>
  );
};
