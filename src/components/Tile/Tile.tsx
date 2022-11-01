import React from "react";
import { TileContainer } from "./TileStyles";

type Props = {
  title: string,
  size: string,
  color: Color,
  children: React.ReactNode,
};

type Color =
  'galactic-blue' |
  'summer-yellow' |
  'pink' |
  'light-red' |
  'cyan' |
  'dark-purple'
  ;

const Tile = (props: Props) => {

  const { title, size, color, children } = props;

  return (
    <TileContainer size={size} color={color}>
      {children}
      <h4>{title}</h4>
    </TileContainer>
  );
};

export default Tile;
