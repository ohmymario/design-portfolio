import styled from 'styled-components';

export const BookingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  width: 100%;
  padding: 5rem 4rem;
  margin-bottom: 56px;
  background-color: var(--black);
  border-radius: 10px;
  align-items: center;


  @media screen and (max-width: 768px) {
    flex-direction: column;
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

`;

export const BookingButton = styled.div`
  padding: 0 30px;
`;