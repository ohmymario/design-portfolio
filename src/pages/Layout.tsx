import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import { LayoutStyles } from './LayoutStyles';

type Props = {}

const Layout = (props: Props) => {
  return (
    <LayoutStyles>
      <Header />
      <Banner />
    </LayoutStyles>
  )
}

export default Layout