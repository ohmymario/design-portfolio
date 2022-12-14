import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import TilesContainer from '../components/TilesContainer/TilesContainer';
import ClientContainer from '../components/ClientContainer/ClientContainer';
import WorkSlides from '../components/WorkSlides/WorkSlides';
import Booking from '../components/Booking/Booking';
import Footer from '../components/Footer/Footer';

import { LayoutStyles } from './LayoutStyles';

type Props = {}

const Layout = (props: Props) => {
  return (
    <LayoutStyles>
      <Header />
      <Banner />
      <TilesContainer />
      <ClientContainer />
      <WorkSlides />
      <Booking />
      <Footer />
    </LayoutStyles>
  )
}

export default Layout