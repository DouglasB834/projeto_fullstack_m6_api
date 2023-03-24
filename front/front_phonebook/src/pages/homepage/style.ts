import styled from "styled-components";

export const StyledMainLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-blue2);

  h1 {
    color: var(--color-text1);
    font-size: 2rem;
  }

  .container_login {
    display: grid;
    gap: 1rem 4.5rem;
    grid-template-columns: 2fr 1fr;
    padding: 1.5rem;
    width: 95%;
    max-width: 1400px;
    margin: 0 auto;
    background-color: var(--color-blue);
    color: var(--color-text1);

    .box_content {
      border: solid 1px yellow;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;

      > p {
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
      figcaption {
        padding: 1rem 0;

        img {
          max-width: 100px;
        }
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: center;

      .box_content {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;
