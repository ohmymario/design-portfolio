import React from 'react';
import LogoSVG from '../../assets/logo.svg';
import { LogoContainer } from './LogoStyles';

type Props = {}

const Logo = (props: Props) => {
  return (
    <LogoContainer href="#homepage">
      <img src={LogoSVG} alt="Company Logo" />
    </LogoContainer>
  )
}

export default Logo