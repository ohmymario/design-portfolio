import React from 'react';
import { HeaderContainer } from './HeaderStyles';
import ConButton from '../ConButton/ConButton';
import Logo from '../Logo/Logo';


const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <ConButton>Free Consultation</ConButton>
    </HeaderContainer>
  )
}

export default Header;
