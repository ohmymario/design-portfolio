import React from 'react';
import Header from '../components/Header/Header';
import { LayoutStyles } from './LayoutStyles';

type Props = {}

const Layout = (props: Props) => {
  return (
    <LayoutStyles>
      <Header />
    </LayoutStyles>
  )
}

export default Layout