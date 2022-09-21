import styled from 'styled-components';
// need to be 64x64px

interface Props {
  direction: string;
}

export const StyledArrowButton = styled.button<Props>`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: var(--black);
  transition: all 0.2s ease-in-out;
  color: #FFFFFF;
  ${props => props.direction === 'right' ? 'margin-left: 8px;' : 'margin-right: 8px;'}

  :hover {
    background: var(--galactic-blue);
    border: var(--galactic-blue);
  }

`;