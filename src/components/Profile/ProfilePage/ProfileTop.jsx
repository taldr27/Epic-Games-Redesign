import React from 'react'
import { communityBG, cupPP, onlineIconPP, penPP, platinumPP, shadowBG, starsPP, userIconPP } from '../../../assets';

const ProfileTop = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-[43px] h-[43px] bg-secondary rounded-[11px] absolute top-5 right-5 cursor-pointer">
        <img src={penPP} />
      </div>
      <img className="w-full" src={communityBG} />
      <img className="w-full h-full absolute inset-0" src={shadowBG} />
      <div>
        <img src={userIconPP} className="absolute top-[100px] left-6 2xl:top-[20%] 2xl:left-[7%]" />
        <img src={onlineIconPP} className="absolute left-[109px] top-[185px] 2xl:top-[32%] 2xl:left-[12.5%]" />
      </div>
      <div className="absolute left-[163px] top-[124.5px] 2xl:top-[25%] 2xl:left-[17%]">
        <h2 className="font-bold text-xl mb-[7px]">USER</h2>
        <div className="flex gap-[13px]">
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">TOTAL DE EXP OBTENIDA</span>
            <div className="flex gap-[11px]">
              <img src={starsPP} />
              <span>4000 EXP</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">LOGROS</span>
            <div className="flex gap-[6.5px]">
              <img src={cupPP} />
              <span>300</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-[10px]">PLATINOS</span>
            <div className="flex gap-[6.5px]">
              <img src={platinumPP} />
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTop
