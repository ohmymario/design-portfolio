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

  h1 {
    margin-bottom: 20px;

    @media only screen and (max-width: 840px) {
      margin-bottom: 25px;
    }
  }

  p {
    width: 75%;
    @media only screen and (max-width: 840px) {
      width: 80%;
    }
  }

`;