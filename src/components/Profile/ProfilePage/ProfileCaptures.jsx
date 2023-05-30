import React from 'react'
import { capturesArray } from '../../../assets/profilePage'

const ProfileCaptures = () => {
  return (
    <div className="grid grid-cols-[30%_minmax(70%,_1fr)] gap-[20px]">
      {capturesArray.map((capture, index) => (
        <img src={capture} key={index} />
      ))}
    </div>

  )
}

export default ProfileCaptures
