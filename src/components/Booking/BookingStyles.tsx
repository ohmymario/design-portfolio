import styled from 'styled-components';

export const BookingContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: var(--max-width);

  @media screen and (max-width: 1050px) {
    padding: 0 40px;
  }

`;

export const BookingBackground = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 4rem;
  margin-bottom: 56px;
  background-color: var(--black);
  border-radius: 10px;
  align-items: center;

  @media screen and (max-width: 1050px) {
    gap: 4rem;
  }

  @media screen and (max-width: 950px) {
    gap: 2rem;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 3.5rem 4.6875rem 4rem 4.6875rem;
    gap: 1.625rem;
  }

`;


export const BookingText = styled.div`
  width: 540px;

  h2 {
    color: var(--light-cream);
    margin-bottom: 25px;
  }

  p {
    color: var(--light-cream);
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
  }

`;

export const BookingButton = styled.div`
  padding: 0 30px;
`;