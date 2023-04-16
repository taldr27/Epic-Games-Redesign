import React from 'react'
import { SectionWrapper } from '../wrapper'
import BodyBar from './BodyBar';
import Carousel from './Carousel';
import EditorSales from './EditorSales';
import CtaCommunity from './CtaCommunity';
import FreeGames from './FreeGames';

const Body = () => {
  return (
    <div className="mt-5 mb-[79px]">
      <BodyBar />
      <Carousel />
      <EditorSales />
      <CtaCommunity />
      <FreeGames />
    </div>
  )
}

export default SectionWrapper(Body, "body");
