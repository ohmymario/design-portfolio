import styled from 'styled-components';

interface Props {
  size: string,
};

export const TileContainer = styled.div<Props>`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  border-radius: 8px;
  font-size: 24px;
  background: var(--galactic-blue);

  width: 100%;
  height: 100%;

  ${({ size }) => size === 'full' &&
    `
    grid-column: span 2;
    grid-row: span 2;
    `}

  ${({ size }) => size === 'half' &&
    `
    grid-column: span 2;
    grid-row: span 1;
    `}

  ${({ size }) => size === 'quarter' &&
    `
    grid-column: span 1;
    grid-row: span 1;
    `}


  img {
    align-self: flex-end;
  }

  h4 {

  }

`;