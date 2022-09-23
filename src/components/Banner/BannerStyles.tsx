import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: var(--maxWidth);
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 20px;
  }

  p {
    width: 75%;
  }

`;