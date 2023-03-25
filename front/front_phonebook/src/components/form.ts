import styled from "styled-components";
import imgflor from "../assets/fundo_img.png";

export const FormStyled = styled.div`
  border: 1px solid var(--color1);
  padding: 1rem;
  max-width: 100%;

  border-radius: 5px;
  .formLogin {
    max-width: 100%;

    .btnEya {
      color: var(--color-black);
      height: auto;
    }
  }
  .content_check_model {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    span {
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s linear;
    }
    > span:hover {
      color: var(--color2);
    }
  }

  .btnLogin {
    margin-top: 1rem;
  }
  .container_links {
    text-align: center;
    p {
      margin-top: 5px;

      span:hover {
        color: var(--color2);
        cursor: pointer;
      }
    }
  }
`;
