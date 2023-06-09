import React from 'react';
import { avatar, closeBtn, status } from "../../assets";
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ handleClickClose }) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/profile');
    handleClickClose();
  };

  return (
    <div
      id="dropdownInformation"
      className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[526px] fixed right-5 border pl-[29px]"
    >
      <img src={closeBtn} className="mt-[31px] ml-[295px] cursor-pointer" onClick={handleClickClose} />
      <div className="flex items-center gap-[22px] my-[26px] relative">
        <img src={avatar} />
        <img src={status} className="absolute left-8 bottom-0" />
        <div className="font-bold text-2xl">User</div>
      </div>
      <ul
        className="flex flex-col text-xl font-normal text-gray-100 gap-[10px]"
        aria-labelledby="dropdownInformationButton"
      >
        <li>
          <a
            href="#"
            className="text-white"
            onClick={handleNavigate}
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Account
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Settings
          </a>
        </li>
        <div className="w-[333px] h-[1px] bg-gray-100 my-[10px]"></div>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Coupons
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Service Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white"
          >
            Refund Policy
          </a>
        </li>
      </ul>
      <div className="w-[333px] h-[1px] bg-gray-100 my-5"></div>
        <a
          href="#"
          className="font-normal text-xl text-gray-100 hover:text-white"
        >
          Log Out
        </a>
    </div>
);
}

export default ProfileDropdown
