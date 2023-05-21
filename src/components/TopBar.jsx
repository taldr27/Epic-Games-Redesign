import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsCart3, BsBell, BsPeople } from 'react-icons/bs';
import { SectionWrapper } from '../wrapper'
import { bell, cart, friends, status, user_ico } from '../assets';
import BodyShopBar from './BodyNavBar';
import DropdownMenu from './DropdownMenu';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenDropdown = () => {
    console.log('click');
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-primary">
      <div className="flex justify-between mt-[68px] mb-5">
        <div className="flex items-center relative gap-[27px] w-[45%]">
          <AiOutlineLeft className="" />
          <input className="rounded-[47px] w-full p-2 pl-[55px] placeholder:text-[16px]" placeholder="Search games, users or content..." />
          <RxMagnifyingGlass className="absolute top-1/2 left-14 transform -translate-y-1/2 w-7 h-7 text-gray-400" />
        </div>
        <div className="flex items-center gap-[17px]">
          <span>Wishlist</span>
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
          <div className="relative">
            <img src={user_ico} onClick={handleOpenDropdown} />
            <img src={status} className="absolute left-8 bottom-0" />
          </div>
        </div>
      </div>
        {isDropdownOpen && <DropdownMenu handleClickClose={handleOpenDropdown} />}
    </div>
  )
}

export default SectionWrapper(TopBar, "topbar");
