import React from 'react'
import { BookingContainer, BookingText, BookingButton, BookingBackground } from './BookingStyles'
import ConButton from '../ConButton/ConButton'

type Props = {}

const data = {
  title: `Book a call with me`,
  text: `I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.`,
  primary: false,
}

const Booking = (props: Props) => {

  const { title, text, primary } = data

  return (
    <BookingContainer>
      <BookingBackground>

        <BookingText>
          <h2>{title}</h2>
          <p>{text}</p>
        </BookingText>

        <BookingButton>
          <ConButton primary={primary}>Free Consultation</ConButton>
        </BookingButton>

      </BookingBackground>
    </BookingContainer>

  )
}

export default Booking