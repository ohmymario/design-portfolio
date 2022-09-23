import styled from "styled-components";

export const TilesWrapper = styled.div`

  max-width: var(--maxWidth);

  display: grid;
  /* margin: 0 auto; */
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  `;
