import React from "react";
import { StyledConButton } from "./ConButtonStyles";

type ConProps = {
  primary: boolean;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  primary: true,
};

const ConButton = (props: ConProps) => {
  const { primary, children } = props;
  return <StyledConButton primary={primary}>{children}</StyledConButton>;
};

ConButton.defaultProps = defaultProps;

export default ConButton;

