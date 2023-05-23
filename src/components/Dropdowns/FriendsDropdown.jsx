import React, { useContext } from 'react';
import { avatar, closeBtn, status } from "../../assets";
import { FriendsContext } from '../../main';

const FriendsDropdown = ({ handleClickClose }) => {
  const dataArray = useContext(FriendsContext);
  console.log(dataArray);
  return (
    <div
      id="dropdownInformation"
      className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[82%] fixed right-5 border pl-[29px] pr-[41px]"
    >
      <img src={closeBtn} className="mt-[31px] ml-[295px]" onClick={handleClickClose} />
      <ul className="flex items-center gap-[5px] my-[26px] bg-secondary w-full h-[56px] rounded-[30px] text-base justify-center font-medium">
        <li className="flex items-center justify-center h-[80%] bg-tertiary w-[98px] rounded-[28px] text-center">Friends</li>
        <li className="flex justify-center w-[98px]">Requests</li>
        <li className="flex justify-center w-[98px]">Settings</li>
      </ul>
    </div>
);
}

export default FriendsDropdown
