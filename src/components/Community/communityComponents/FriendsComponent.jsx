import React, { useContext } from 'react'
import { FriendsContext } from '../../../context/FriendsContext';

const FriendsComponent = () => {
  const { friendsArray } = useContext(FriendsContext);
  return (
    <div className="mb-[22.5px] w-full">
      <div className="text-xl font-bold flex justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">Friends | {friendsArray.length}</span>
        </div>
      </div>
      <div className="flex flex-wrap mt-3 h-[98px] gap-[6px]">
        {friendsArray.map((friend) => (
          <div className="flex w-[183px] h-[43px]" key={friend.id}>
            <img src={friend.profilePic} />
            <div className="flex flex-col ml-[10px] h-[31px]">
              <span className="font-bold text-base mb-[-7px]">{friend.name}</span>
              <span className="font-normal text-xs">{friend.activity}</span>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  )
}

export default FriendsComponent;
