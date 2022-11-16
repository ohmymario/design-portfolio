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

  @media screen and (max-width: 850px) {
    transform: translateX(0);
    gap: 2.5rem;
    margin-bottom: 6.25rem;

    padding: 0 1rem;

    flex-direction: column;

    > * {
      text-align: center;
    }
  }

`