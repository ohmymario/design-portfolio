import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import TilesContainer from '../components/TilesContainer/TilesContainer';
import ClientContainer from '../components/ClientContainer/ClientContainer';

import { LayoutStyles } from './LayoutStyles';

type Props = {}

const Layout = (props: Props) => {
  return (
    <LayoutStyles>
      <Header />
      <Banner />
      <TilesContainer />
      <ClientContainer />
    </LayoutStyles>
  )
}

export default Layout