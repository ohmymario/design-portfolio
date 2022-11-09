import styled from 'styled-components';

export const StyledClientContainer = styled.div`
  max-width: var(--max-width);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5.5rem;

  @media screen and (max-width: 1050px) {
    transform: translateX(-40px);
    gap: 4.3rem;
    margin-bottom: 7.5rem;
  }

`