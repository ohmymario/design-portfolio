import styled from "styled-components";

export const TilesWrapper = styled.div`

  //1110 px x 364px

  max-width: var(--max-width);
  width: 100%;
  height: 364px;

  display: grid;
  /* margin: 0 auto; */
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.5rem;

  margin-bottom: 8.5rem;

`;
