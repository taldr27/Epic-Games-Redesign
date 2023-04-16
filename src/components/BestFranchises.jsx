import React from 'react'
import { bestFranchises } from '../constants'
import { rightArrow } from '../assets'

const BestFranchises = () => {
  return (
    <div className="flex flex-col gap-5 h-[181px] mt-10 mb-[42.5px]">
      <div className="flex">
        <span className="mr-[19px] text-xl font-bold">Las mejores franquicias</span>
        <img className="mt-1" src={rightArrow} />
      </div>
      <div className="flex gap-5">
        {bestFranchises.map((bestFranchise) => (
          <div
            key={bestFranchise.name}
            className={`flex items-center justify-center ${bestFranchise.color} w-[216px] h-[126px] rounded-[5px]`}>
            <img src={bestFranchise.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestFranchises
