import React from 'react';
import { HeaderContainer } from './HeaderStyles';
import ConButton from '../ConButton/ConButton';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <a href="#homepage">
          <img src={Logo} alt="Company Logo" />
        </a>
        <ConButton>Free Consultation</ConButton>
      </div>
    </HeaderContainer>
  )
}

export default Header;
