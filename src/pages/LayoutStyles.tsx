import styled from 'styled-components';

export const LayoutStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.125rem;

  @media screen and (max-width: 650px) {
    padding-top: 1rem;
  }

`