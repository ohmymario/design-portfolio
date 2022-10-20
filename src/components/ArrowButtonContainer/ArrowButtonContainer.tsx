import React from 'react'
import ArrowButton from '../ArrowButton/ArrowButton'

type Props = {
  sideScroll: (scrollOffset: number) => void;
}

const ArrowButtonContainer = (props: Props) => {

  const { sideScroll } = props;

  return (
    <>
      <ArrowButton direction="left" onClick={() => sideScroll(-475)} />
      <ArrowButton direction="right" onClick={() => sideScroll(475)} />
    </>
  )
}

export default ArrowButtonContainer