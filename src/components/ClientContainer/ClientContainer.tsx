import React from 'react'
import { StyledClientContainer } from './ClientContainerStyles'
import ClientImage from '../ClientImage/ClientImage'
import ClientMessage from '../ClientMessage/ClientMessage'

import clientImage from '../../assets/image-amy.webp'

type ClientProps = {
}

const data = {
  intro: "I’m Amy, and I’d love to work on your next project",
  message: "I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!",
  primary: false,
}

const imageData = {
  src: clientImage,
  alt: "a picture of amy",
}

const ClientContainer = (props: ClientProps) => {
  return (
    <StyledClientContainer>
      <ClientImage imageData={imageData} />
      <ClientMessage data={data} />
    </StyledClientContainer>
  )
}

export default ClientContainer