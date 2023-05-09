import React from 'react'
import RecentlyPlayed from './communityComponents/RecentlyPlayed'
import Achievements from './communityComponents/Achievements'

const CommunityResume = () => {
  return (
    <div className=''>
      <h2 className="text-xl font-bold mb-3">Recently Played</h2>
      <RecentlyPlayed />
      <Achievements />
    </div>
  )
}

export default CommunityResume
