import styled from 'styled-components';

export const WorkSlidesContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5.5rem;
  `;

export const WorkSlidesHeader = styled.h3`
  margin-bottom: 3.5rem;
  border-bottom: 1px solid red;
  `;

export const WorkSlidesImages = styled.div`
  width: 100%;

  display: grid;
  gap: 1.875rem;
  margin-bottom: 3.5rem;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    border: 2px solid red;
    display: inline-block;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }


`;

export const WorkSlidesButtons = styled.div`
`;
