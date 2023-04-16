import React from 'react'
import { circleArrowLeft, circleArrowRight, rightArrow } from '../assets'

const SlideBar = ({ title }) => {
  return (
    <div className="mt-[42px] text-xl font-bold flex justify-between mb-[22.5px]">
      <div className="flex items-center">
        <span className="mr-[19px]">{title}</span>
        <img className="mt-1" src={rightArrow} />
      </div>
      <div className="flex gap-2">
        <img src={circleArrowLeft}  />
        <img src={circleArrowRight}/>
      </div>
    </div>
  )
}

export default SlideBar
