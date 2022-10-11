import styled from 'styled-components';

export const WorkSlidesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkSlidesHeader = styled.h3`
  margin-bottom: 3.5rem;
`;

export const WorkSlidesImages = styled.div`
  margin-bottom: 3.5rem;
  display: flex;
  gap: 1.875rem;

  img {
    display: block;
    &:hover {
      cursor: pointer;
      border: 1px solid red;
    }
  }


`;

export const WorkSlidesButtons = styled.div`
  border: 1px solid red;
`;
