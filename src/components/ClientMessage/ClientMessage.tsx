import React from 'react';

import { StyledClientMessage } from './ClientMessageStyles';
import ConButton from '../ConButton/ConButton';

type Props = {
  data: {
    intro: string;
    message: string;
    primary: boolean;
  };
}



const ClientMessage = (props: Props) => {

  const { intro, message, primary } = props.data;

  return (
    <StyledClientMessage>
      <h2>{intro}</h2>
      <p>{message}</p>
      <ConButton primary={primary} >Free Consultation</ConButton>
    </StyledClientMessage>
  )
}

export default ClientMessage