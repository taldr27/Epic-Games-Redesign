import React from 'react'
import { SectionWrapper } from '../../wrapper'
import CommunityTop from './CommunityTop';
import CommunityNav from './CommunityNav';

const CommunityBody = () => {
  return (
    <div className="mt-5 relative">
      <CommunityTop />
      <CommunityNav />
    </div>
  )
}

export default SectionWrapper(CommunityBody, "community");
