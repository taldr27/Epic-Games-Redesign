import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsCart3, BsBell, BsPeople } from 'react-icons/bs';
import { SectionWrapper } from '../wrapper'
import { user_ico } from '../assets';

const TopBar = () => {
  return (
    <div className="flex justify-between mt-[48px]">
      <div className="flex items-center relative gap-[27px] w-[30em]">
        <AiOutlineLeft className="" />
        <input className="rounded-[47px] w-full p-3 pl-[55px] placeholder:text-[16px]" placeholder="Buscar juegos, jugadores o contenido..." />
        <RxMagnifyingGlass className="absolute top-1/2 left-14 transform -translate-y-1/2 w-7 h-7 text-gray-400" />
      </div>
      <div className="flex items-center gap-5">
        <span>Lista de deseos</span>
        <span> | </span>
        <div className="bg-secondary h-3 p-5 rounded-2xl flex items-center">  
          <BsCart3 />
        </div>
        <div className="bg-secondary h-3 p-5 rounded-2xl flex items-center">
          <BsBell />1
        </div>
        <div className="bg-secondary h-3 p-5 rounded-2xl flex items-center">
          <BsPeople /> 5
        </div>
        <img src={user_ico} />
      </div>
    </div>
  )
}

export default SectionWrapper(TopBar, "topbar");
