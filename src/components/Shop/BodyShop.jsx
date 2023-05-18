import React from 'react'
import { SectionWrapper } from '../../wrapper';
import BodyShopBar from '../BodyNavBar';
import Carousel from './Carousel';
import EditorSales from './EditorSales';
import CtaCommunity from './CtaCommunity';
import FreeGames from './FreeGames';
import NewEvents from './NewEvents';
import CommunityFeatured from './CommunityFeatured';
import BestFranchises from './BestFranchises';
import RecentUpdated from './RecentUpdated';

const BodyShop = () => {
  const barElements = [
    "Home",
    "Discover",
    "News",
  ]
  return (
    <div className="mb-[79px]">
      <div className="h-[43px] bg-primary fixed z-50 xd pr-5 2xl:pr-[87px]">
        <BodyShopBar elements={barElements} />
      </div>
      <div>
        <Carousel />
        <EditorSales />
        <CtaCommunity />
        <FreeGames />
        <NewEvents />
        <CommunityFeatured />
        <BestFranchises />
        <RecentUpdated />
      </div>
    </div>
  )
}

export default SectionWrapper(BodyShop, "body");
