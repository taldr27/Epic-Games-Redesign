import React from 'react'
import { SectionWrapper } from '../../wrapper'
import CommunityTop from './CommunityTop';

const CommunityBody = () => {
  return (
    <div className="mt-5">
      <CommunityTop />
    </div>
  )
}

export default SectionWrapper(CommunityBody, "community");
