import React from 'react'
import { SectionWrapper } from '../../wrapper'
import BodyBar from '../Shop/BodyShopBar';

const CommunityMain = () => {
  const barElements = [
    "Home",
    "Foros",
    "Creaciones",
    "Transmiciones",
    "Epic Indies",
  ]
  return (
    <div className="mb-[79px] relative">
      <div className="h-[43px] mb-5 bg-secondary">
        <BodyBar elements={barElements} />
      </div>
      CommunityBody
    </div>
  )
}

export default SectionWrapper(CommunityMain, 'community');
