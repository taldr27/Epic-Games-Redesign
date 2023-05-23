import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { SectionWrapper } from '../wrapper'
import { bell, cart, friends, status, user_ico } from '../assets';
import MainDropdown from './Dropdowns/MainDropdown';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState('');

  const handleOpenDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownElement = (event) => {
    let element = event.target;
    while (element && !element.id) {
      element = element.parentNode;
    }
    
    if (element && element.id) {
      const parentId = element.id;
      handleOpenDropdown();
      setClickedLink(parentId)
    }
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
          <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center justify-center cursor-pointer" onClick={handleDropdownElement} id="cart">  
            <img src={cart} />
          </div>
          <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center cursor-pointer" onClick={handleDropdownElement} id="notifications">
            <img src={bell} /><span className="ml-1">2</span>
          </div>
          <div className="bg-secondary h-[43px] w-[69px] p-5 rounded-[28px] flex items-center cursor-pointer" onClick={handleDropdownElement} id="friends">
            <img src={friends} /> <span className="ml-1">5</span>
          </div>
          <div className="relative cursor-pointer" onClick={handleDropdownElement} id="profile">
            <img src={user_ico} onClick={handleOpenDropdown} />
            <img src={status} className="absolute left-8 bottom-0" />
          </div>
        </div>
      </div>
        {isDropdownOpen && <MainDropdown handleClickClose={handleOpenDropdown} dropdownElement={clickedLink} />}
    </div>
  )
}

export default SectionWrapper(TopBar, "topbar");
