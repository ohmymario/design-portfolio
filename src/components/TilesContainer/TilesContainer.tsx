import React from 'react';
import { TilesWrapper } from './TilesContainerStyles';
import Tile from '../Tile/Tile';

import graphicDesign from '../../assets/pattern-graphic-design.svg';

type Props = {
  // children: React.ReactNode;
}

const TilesContainer = (props: Props) => {
  return (
    <TilesWrapper>
      <Tile title="sup" >
        <img src={graphicDesign} alt="" />
      </Tile>
      <Tile title="sup" >
        <img src="" alt="" />
      </Tile>

    </TilesWrapper>
  )
}

export default TilesContainer
