import React from 'react'
import RecentlyPlayed from '../communityComponents/RecentlyPlayed'
import Achievements from '../communityComponents/Achievements'
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
