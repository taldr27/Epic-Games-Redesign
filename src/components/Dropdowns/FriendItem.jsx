import React from 'react';

const FriendItem = ({ friend }) => {
  return (
    <div className="flex w-[183px] h-[43px]">
      <img src={friend.profilePic} alt="Friend Profile" />
      <div className="flex flex-col ml-[10px] h-[31px]">
        <span className="font-bold text-base mb-[-7px]">{friend.name}</span>
        <span className="font-normal text-xs">{friend.activity}</span>
      </div>
    </div>
  );
};

export default FriendItem;
