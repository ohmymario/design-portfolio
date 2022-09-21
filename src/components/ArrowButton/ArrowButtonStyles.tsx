import styled from 'styled-components';
// need to be 64x64px

export const StyledArrowButton = styled.button`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: var(--black);
  color: #FFFFFF;

  :hover {
    background: var(--galactic-blue);
  }

// if its left pointing then 8px padding on the right
// if its right pointing then 8px padding on the left
//  $//{({ direction }) => direction === 'left' ? 'padding-right: 8px;' : 'padding-left: 8px;'}

`;