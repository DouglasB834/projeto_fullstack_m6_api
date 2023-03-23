import styled from "styled-components";
import imgflor from "../assets/fundologin.png";

export const FormStyled = styled.div`
  border: 1px solid var(--color-white);
  padding: 1rem;
  max-width: 300px;

  background: url(${imgflor}) center;
  .formLogin {
    max-width: 282px;
    object-fit: cover;

    .btnEya {
      height: auto;
    }
  }
  .container_links {
    span {
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s linear;
    }
    span:hover {
      color: #c4903d;
    }
  }

  .btnLogin {
    margin-top: 1rem;
  }
`;
