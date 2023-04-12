import React from 'react'
import { SectionWrapper } from '../wrapper'
import BodyBar from './BodyBar';

const Body = () => {
  return (
    <div className="mt-5">
      <BodyBar />
      Body
    </div>
  )
}

export default SectionWrapper(Body, "body");
