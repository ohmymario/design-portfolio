import React from 'react'
import { StyledClientImage } from './ClientImageStyles'

type Props = {
  imageData: {
    src: string
    alt: string
  }
}

const ClientImage = (props: Props) => {
  const { src, alt } = props.imageData

  return (
    <StyledClientImage src={src} alt={alt} />
  )
}

export default ClientImage;