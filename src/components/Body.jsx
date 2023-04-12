import React from 'react'
import { SectionWrapper } from '../wrapper'
import BodyBar from './BodyBar';
import Carousel from './Carousel';

const Body = () => {
  return (
    <div className="mt-5">
      <BodyBar />
      <Carousel />
    </div>
  )
}

export default SectionWrapper(Body, "body");
