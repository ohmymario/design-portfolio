import React from "react";
import { TileContainer } from "./TileStyles";

type Props = {
  title: string,
  children: React.ReactNode,
};

const Tile = (props: Props) => {
  return (
    <TileContainer>
      {props.children}
      <h4>{props.title}</h4>
    </TileContainer>
  );
};

export default Tile;
