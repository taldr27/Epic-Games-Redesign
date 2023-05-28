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
    <div className="mb-[79px] relative h-screen">
      <div className="bg-primary fixed xd pr-5 top-[13%] z-40 2xl:pr-[87px]">
        <BodyBar elements={barElements} />
      </div>
      <div className="mt-[64px]">
      CommunityBody

      </div>
    </div>
  )
}

export default SectionWrapper(CommunityMain, 'community');
