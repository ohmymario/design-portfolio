import React from 'react';
import { TilesWrapper } from './TilesContainerStyles';
import Tile from '../Tile/Tile';

import graphicDesign from '../../assets/pattern-graphic-design.svg';
import uiux from '../../assets/pattern-ui-ux.svg'
import apps from '../../assets/pattern-apps.svg'
import photography from '../../assets/pattern-photography.svg'
import illustrations from '../../assets/pattern-illustrations.svg';
import motiongraphics from '../../assets/pattern-motion-graphics.svg';

type Props = {
  // children: React.ReactNode;
}

const TilesContainer = (props: Props) => {
  return (
    <TilesWrapper>
      <Tile title="Graphic Design" size="full" color="galactic-blue">
        <img src={graphicDesign} alt="" />
      </Tile>
      <Tile title="UI/UX" size="quarter" color="summer-yellow">
        <img src={uiux} alt="" />
      </Tile>
      <Tile title="Apps" size="quarter" color="pink">
        <img src={apps} alt="" />
      </Tile>
      <Tile title="Photography" size="half" color="cyan">
        <img src={photography} alt="" />
      </Tile>
      <Tile title="Illustrations" size="half" color="light-red">
        <img src={illustrations} alt="" />
      </Tile>
      <Tile title="Motion Graphics" size="half" color="dark-purple">
        <img src={motiongraphics} alt="" />
      </Tile>

    </TilesWrapper>
  )
}

export default TilesContainer
