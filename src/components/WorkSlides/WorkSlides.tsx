import React, { useRef } from 'react'

import slide1 from '../../assets/image-slide-1.jpg'
import slide2 from '../../assets/image-slide-2.jpg'
import slide3 from '../../assets/image-slide-3.jpg'
import slide4 from '../../assets/image-slide-4.jpg'
import slide5 from '../../assets/image-slide-5.jpg'

import ArrowButtonContainer from '../ArrowButtonContainer/ArrowButtonContainer';

import {
  WorkSlidesContainer, WorkSlidesHeader,
  WorkSlidesImages, WorkSlidesButtons
} from './WorkSlidesStyles';

type Props = {}

const images: { src: string, alt: string }[] = [
  {
    src: slide1,
    alt: 'slide 1',
  },
  {
    src: slide2,
    alt: 'slide 2',
  },
  {
    src: slide3,
    alt: 'slide 3',
  },
  {
    src: slide4,
    alt: 'slide 4',
  },
  {
    src: slide5,
    alt: 'slide 5',
  },
]

const WorkSlides = (props: Props) => {

  const imagesRef = useRef<HTMLDivElement>(null);

  const sideScroll = (scrollOffset: number) => {
    if (imagesRef.current != null) {
      imagesRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <WorkSlidesContainer>

      <WorkSlidesHeader>My Work</WorkSlidesHeader>

      <WorkSlidesImages ref={imagesRef}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </WorkSlidesImages>

      <WorkSlidesButtons>
        <ArrowButtonContainer sideScroll={sideScroll} />
      </WorkSlidesButtons>

    </WorkSlidesContainer >
  )
}

export default WorkSlides
