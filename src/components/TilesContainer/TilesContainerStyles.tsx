import styled from "styled-components";

export const TilesWrapper = styled.div`
  max-width: var(--max-width);
  width: 100%;
  height: 364px;

  display: grid;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.5rem;

  margin-bottom: 8.5rem;

  @media screen and (max-width: 1050px) {
    padding: 0 40px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    height: 570px;
    margin-bottom: 7.5rem;
  }

`;
