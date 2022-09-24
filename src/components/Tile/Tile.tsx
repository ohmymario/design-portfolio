import React from "react";
import { TileContainer } from "./TileStyles";

type Props = {
  title: string,
  size: string,
  children: React.ReactNode,
};

const Tile = (props: Props) => {
  return (
    <TileContainer size={props.size}>
      {props.children}
      <h4>{props.title}</h4>
    </TileContainer>
  );
};

export default Tile;
