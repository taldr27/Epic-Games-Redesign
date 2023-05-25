import React from 'react'
import { SectionWrapper } from '../../wrapper'
import BodyBar from '../BodyNavBar';

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
      <div className="h-[43px] mb-5 bg-primary fixed z-50 xd pr-5 2xl:pr-[87px]">
        <BodyBar elements={barElements} />
      </div>
      <div className="">
      CommunityBody

      </div>
    </div>
  )
}

export default SectionWrapper(CommunityMain, 'community');
