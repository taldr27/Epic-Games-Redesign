import React from 'react'
import { communityBG, cupCP, onlineIconCP, penCP, platinumCP, shadowBG, starsCP, userIconCP } from '../../assets';

const CommunityTop = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-[43px] h-[43px] bg-secondary rounded-[11px] absolute top-5 right-5 cursor-pointer">
        <img src={penCP} />
      </div>
      <img className="w-full" src={communityBG} />
      <img className="w-full h-full absolute inset-0" src={shadowBG} />
      <div>
        <img src={userIconCP} className="absolute top-[100px] left-6" />
        <img src={onlineIconCP} className="absolute left-[109px] top-[185px]" />
      </div>
      <div className="absolute left-[163px] top-[124.5px]">
        <h2 className="font-bold text-xl mb-[7px]">USER</h2>
        <div className="flex gap-[13px]">
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">TOTAL DE EXP OBTENIDA</span>
            <div className="flex gap-[11px]">
              <img src={starsCP} />
              <span>4000 EXP</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">LOGROS</span>
            <div className="flex gap-[6.5px]">
              <img src={cupCP} />
              <span>300</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">PLATINOS</span>
            <div className="flex gap-[6.5px]">
              <img src={platinumCP} />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityTop
