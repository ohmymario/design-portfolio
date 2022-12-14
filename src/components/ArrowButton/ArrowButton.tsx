import React from 'react';
import { StyledArrowButton } from './ArrowButtonStyles';
import RightArrow from '../../assets/icon-arrow-right.svg'
import LeftArrow from '../../assets/icon-arrow-left.svg'

type ArrowProps = {
  direction: "left" | "right";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ArrowButton = (props: ArrowProps) => {
  const { direction } = props;
  return (
    <StyledArrowButton direction={direction} onClick={props.onClick}>
      {direction === 'right' && <img src={RightArrow} alt="Move Right" />}
      {direction === 'left' && <img src={LeftArrow} alt="Move Left" />}
    </StyledArrowButton>
  )
};

export default ArrowButton;