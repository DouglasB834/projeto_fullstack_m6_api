import { StyledMainLogin } from "./style";

StyledMainLogin;

export const HomePage = () => {
  return (
    <StyledMainLogin>
      <h1>bem vindo</h1>
      <section className="contaner_login">
        <div className="box_content">
          <p>
            Não perca mais tempo com apenas alguns cliques, você pode ter acesso
            a uma lista telefônica completa. Cadastre-se ou faça login
          </p>
        </div>
      </section>
    </StyledMainLogin>
  );
};
