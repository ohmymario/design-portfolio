import React from 'react';
import { StyledArrowButton } from './ArrowButtonStyles';
import RightArrow from '../../assets/icon-arrow-right.svg'
import LeftArrow from '../../assets/icon-arrow-left.svg'

const ArrowButton = () => {
  return (
    <StyledArrowButton>
      <img src={RightArrow} alt="Right Arrow" />
    </StyledArrowButton>
  )
}

export default ArrowButton