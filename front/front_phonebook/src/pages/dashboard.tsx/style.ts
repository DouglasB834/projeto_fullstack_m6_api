import styled from "styled-components";

export const DashBoardMain = styled.main`
  background-color: var(--color-blue);
  margin: 2rem auto;
  padding: 1rem 0;

  @media (max-width: 750px) {
    .girlBg {
      display: none;
    }
  }
`;

export const UlStyled = styled.ul`
  padding: 2rem;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: var(--color-blue2);
  margin: auto;
  border-radius: 5px;
  max-height: 750px;
  min-height: 600px;
  overflow-x: hidden;
  /* justify-content: center; */

  .imgContact {
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;
