import React from 'react'
import { SectionWrapper } from '../wrapper'
import { EpicLogo } from '../assets'

const SideBar = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center mt-[31px]">
        <img src={EpicLogo} />
      </div>
    </div>
  )
}

export default SectionWrapper(SideBar, "sidebar")
