import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsCart3, BsBell, BsPeople } from 'react-icons/bs';
import { SectionWrapper } from '../wrapper'
import { bell, cart, friends, user_ico } from '../assets';

const TopBar = () => {
  return (
    <div className="lg:flex justify-between mt-[48px]">
      <div className="flex items-center relative gap-[27px] w-[50%]">
        <AiOutlineLeft className="" />
        <input className="rounded-[47px] w-full p-2 pl-[55px] placeholder:text-[16px]" placeholder="Buscar juegos, jugadores o contenido..." />
        <RxMagnifyingGlass className="absolute top-1/2 left-14 transform -translate-y-1/2 w-7 h-7 text-gray-400" />
      </div>
      <div className="flex items-center gap-[17px]">
        <span>Lista de deseos</span>
        <div className="bg-white h-[30px] w-[0.1px]"></div>
        <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center justify-center">  
          <img src={cart} />
        </div>
        <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center">
          <img src={bell} /><span className="ml-1">2</span>
        </div>
        <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center">
          <img src={friends} /> <span className="ml-1">5</span>
        </div>
        <img src={user_ico} />
      </div>
    </div>
  )
}

export default SectionWrapper(TopBar, "topbar");
