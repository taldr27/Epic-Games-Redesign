import React from 'react'
import { SectionWrapper } from '../../wrapper';
import BodyShopBar from './BodyShopBar';
import Carousel from './Carousel';
import EditorSales from './EditorSales';
import CtaCommunity from './CtaCommunity';
import FreeGames from './FreeGames';
import NewEvents from './NewEvents';
import CommunityFeatured from './CommunityFeatured';
import BestFranchises from './BestFranchises';
import RecentUpdated from './RecentUpdated';

const Body = () => {
  return (
    <div className="mt-5 mb-[79px]">
      <BodyShopBar />
      <Carousel />
      <EditorSales />
      <CtaCommunity />
      <FreeGames />
      <NewEvents />
      <CommunityFeatured />
      <BestFranchises />
      <RecentUpdated />
    </div>
  )
}

export default SectionWrapper(Body, "body");
