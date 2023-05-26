import React, { useContext } from 'react';
import { avatar, closeBtn, status, user_ico } from "../../assets";
import { RxMagnifyingGlass } from 'react-icons/rx';
import { FriendsContext } from '../../context/FriendsContext';

const FriendsDropdown = ({ handleClickClose }) => {
  const { friendsArray } = useContext(FriendsContext);
  return (
    <div
      id="dropdownInformation"
      className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[82%] fixed right-5 border pl-[29px] pr-[41px]"
    >
      <img src={closeBtn} className="mt-[31px] ml-[295px] cursor-pointer" onClick={handleClickClose} />
      <ul className="flex items-center gap-[5px] my-[26px] bg-secondary w-full h-[56px] rounded-[30px] text-base justify-center font-medium">
        <li className="flex items-center justify-center h-[80%] bg-tertiary w-[98px] rounded-[28px] text-center cursor-pointer">Friends</li>
        <li className="flex justify-center w-[98px] cursor-pointer">Requests</li>
        <li className="flex justify-center w-[98px] cursor-pointer">Settings</li>
      </ul>
      <div className="relative flex items-center">
        <input className="bg-secondary w-full rounded-[5px] h-11 pl-11" placeholder="Search Friends" />
        <RxMagnifyingGlass className="absolute left-3 w-7 h-7 text-xl text-gray-400" /> {/* Check size of MagnifyingGlass */}
      </div>
      <div>
        <h2>En linea {friendsArray.length}</h2>
        <div className="relative cursor-pointer">
            <img src={user_ico} />
            <img src={status} className="absolute left-8 bottom-0" />
            <div>
              <span>User</span>
              <span>Tu</span>
            </div>
            
        </div>
      </div>
    </div>
);
}

export default FriendsDropdown
