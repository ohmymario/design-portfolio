import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.125rem;

  @media screen and (max-width: 1050px) {
    padding: 0 2.5rem;
  }

   @media screen and (max-width: 650px) {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

`;