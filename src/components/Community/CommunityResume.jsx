import React from 'react'
import RecentlyPlayed from './communityComponents/RecentlyPlayed'
import Achievements from './communityComponents/Achievements'
import CommunityFriends from './CommunityFriends'

const CommunityResume = () => {
  return (
    <div className=''>
      <h2 className="text-xl font-bold mb-3">Recently Played</h2>
      <RecentlyPlayed />
      <Achievements />
      <CommunityFriends />
    </div>
  )
}

export default CommunityResume
