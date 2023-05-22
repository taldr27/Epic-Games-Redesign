import React from 'react';
import { avatar, closeBtn, status } from "../../assets";
import { notifications } from '../../constants';

const NotificationsDropdown = ({ handleClickClose }) => {
  return (
    <div
      id="dropdownInformation"
      className="z-[100] bg-primary divide-gray-100 rounded-[15px] shadow w-[391px] h-[80%] fixed right-5 border pl-[29px]"
    >
      <img src={closeBtn} className="mt-[31px] ml-[295px] cursor-pointer" onClick={handleClickClose} />
      <div className="flex items-center gap-[22px] my-[26px] relative">
        <div className="font-bold text-xl">Notifications</div>
      </div>
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div key={notification.id} className="w-[333px] bg-secondary px-4 py-2 rounded-[5px] hover:text-gray-100 ">
            <div className="w-full flex gap-[10px]">
              <img src={notification.img} className="h-[43px] rounded-3xl" />
              <div className="flex flex-col w-full">
                <div className="flex justify-between ">
                  <h2 className="font-bold text-base">{notification.title}</h2>
                  <span className="text-[10px]">Hace {notification.time}</span>
                </div>
                <p className="text-sm w-[192px]">{notification.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
);
}

export default NotificationsDropdown
