import React from 'react'
import RecentlyPlayed from '../ProfileComponents/RecentlyPlayed'
import Achievements from '../ProfileComponents/Achievements'
import ProfileFriends from './ProfileFriends'

const ProfileResume = () => {
  return (
    <div className=''>
      <h2 className="text-xl font-bold mb-3">Recently Played</h2>
      <RecentlyPlayed />
      <Achievements />
      <ProfileFriends />
    </div>
  )
}

export default ProfileResume
