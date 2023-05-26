import React, { useContext, useState } from 'react';
import { avatar, closeBtn, status, user_ico } from "../../assets";
import { RxMagnifyingGlass } from 'react-icons/rx';
import { FriendsContext } from '../../context/FriendsContext';
import FriendItem from './FriendItem';

const FriendsDropdown = ({ handleClickClose }) => {
  const { friendsArray } = useContext(FriendsContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFriends = friendsArray.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onlineFriends = filteredFriends.filter((friend) => friend.status);
  const offlineFriends = filteredFriends.filter((friend) => !friend.status);
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
        <input
          className="bg-secondary w-full rounded-[5px] h-11 pl-11" 
          placeholder="Search Friends" 
          value={searchQuery}
          onChange={handleInputChange}
        />
        <RxMagnifyingGlass className="absolute left-3 w-7 h-7 text-xl text-gray-400" /> {/* Check size of MagnifyingGlass */}
      </div>
      <div className="mt-5">
        <>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <div className="relative">
              <img src={user_ico} />
              <img src={status} className="absolute left-8 top-8" />
            </div>
            <div>
              <span className="mr-3">User</span>
              <span>You</span>
            </div>
          </div>
          <div className="w-[60%] border-b-2 border-gray-100 mt-3 mb-5"></div>
          <h2 className="text-xl font-bold">Online {onlineFriends.length}</h2>
        </>
        <div className="">
          <div className="flex flex-col gap-[10px] my-5">
            {onlineFriends.map((friend) => (
              <FriendItem key={friend.id} friend={friend} />
            ))}
          </div>
          <span className="text-xl font-bold">Offline {offlineFriends.length}</span>
          <div className="flex flex-col gap-[10px] mt-5">
            {offlineFriends.map((friend) => (
              <FriendItem key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </div>
);
}

export default FriendsDropdown
