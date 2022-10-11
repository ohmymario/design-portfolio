import styled from 'styled-components';

interface Props {
  primary: boolean;
}

export const StyledConButton = styled.button<Props>`
  background: ${props => props.primary ? "var(--black)" : "var(--light-red)"};
  color: var(--light-cream);
  font-size: 1rem;
  line-height: 28px;
  font-weight: 700;
  border-radius: 28px;
  border: none;
  padding: 14px 46px;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  :hover {
    background: ${props => props.primary ? "var(--galactic-blue)" : "var(--summer-yellow)"};
  }
`