import React from 'react'
import { SectionWrapper } from '../wrapper'
import { EpicLogo, community, games, shop_ico, unreal } from '../assets'

const SideBar = () => {
  return (
    <div className="h-screen ml-5 w-[217px]">
      <div className="flex justify-center mt-[41px] mb-[28.09px]">
        <img src={EpicLogo} />
      </div>
      <div className="flex flex-col items-center">
        <span className="flex gap-[12.34px] p-[17.91px] bg-slate-800 w-full rounded-[5px]"><img src={shop_ico} />Tienda</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full"><img src={games} />Mis Juegos</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full"><img src={community} />Comunidad</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full"><img src={unreal} />Unreal Engine</span>
      </div>
    </div>
  )
}

export default SideBar;
