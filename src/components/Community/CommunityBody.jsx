import React from 'react'
import { SectionWrapper } from '../../wrapper'
import { communityBG, shadowBG } from '../../assets';

const CommunityBody = () => {
  return (
    <div className="mt-5 relative">
      <img className="" src={communityBG} />
      <img className="w-full h-full absolute inset-0" src={shadowBG} />
    </div>
  )
}

export default SectionWrapper(CommunityBody, "community");
