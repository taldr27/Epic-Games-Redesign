import React from 'react'
import { SectionWrapper } from '../wrapper'
import BodyBar from './BodyBar';
import Carousel from './Carousel';
import EditorSales from './EditorSales';
import CtaCommunity from './CtaCommunity';

const Body = () => {
  return (
    <div className="mt-5">
      <BodyBar />
      <Carousel />
      <EditorSales />
      <CtaCommunity />
    </div>
  )
}

export default SectionWrapper(Body, "body");
