import React from 'react'

const CommunityNav = () => {
  return (
    <nav className="absolute top-[239px] w-full h-[43px] 2xl:top-[40%]">
      <ul className="flex gap-10 items-center h-full font-bold text-gray-100 cursor-pointer">
        <li className="ml-[32px] 2xl:ml-[8%]">Resume</li>
        <li>Achievements</li>
        <li>Captures</li>
        <li>Friends</li>
        <li>Publications</li>
      </ul>
    </nav>
  )
}

export default CommunityNav
