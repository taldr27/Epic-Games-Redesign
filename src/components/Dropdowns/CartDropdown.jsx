import React from 'react';
import { avatar, closeBtn, status } from "../../assets";

const CartDropdown = ({ handleClickClose }) => {
  return (
    <div
      id="dropdownInformation"
      className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[526px] fixed right-5 border pl-[29px]"
    >
      <img src={closeBtn} className="mt-[31px] ml-[295px]" onClick={handleClickClose} />
      <div className="flex items-center gap-[22px] my-[26px] relative">
        <div className="font-bold text-2xl">CartDropdown</div>
      </div>
      
    </div>
);
}

export default CartDropdown
