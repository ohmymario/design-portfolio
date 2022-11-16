import styled from 'styled-components';


export const StyledClientMessage = styled.div`
   max-width: 540px;

  h2 {
    margin-bottom: 2.125rem;

    @media screen and (max-width: 650px) {
      margin-bottom: 1.5rem;

    }
  }

  p {
    margin-bottom: 2rem;

    @media screen and (max-width: 650px) {

      margin-bottom: 1.5rem;
    }

  }


`;