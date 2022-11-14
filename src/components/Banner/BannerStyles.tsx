import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: var(--maxWidth);
  margin-bottom: 5rem;

  @media only screen and (max-width: 840px) {
    padding: 0 2.5rem;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 20px;

    @media only screen and (max-width: 840px) {
      margin-bottom: 25px;
    }

    @media only screen and (max-width: 650px) {
      margin-bottom: 16px;
    }
  }

  p {
    width: 75%;
    @media only screen and (max-width: 840px) {
      width: 80%;
    }
  }

`;