import React, { useState } from 'react'
import { EpicLogo, community, doubleArrow, games, shop_ico, unreal } from '../assets'
import { useNavigate } from 'react-router-dom';
import QuickStart from './QuickStart';

const SideBar = () => {
  const navigate = useNavigate();
  const defaultSelected = window.location.pathname === '/my-games' ? 'my-games' : 'shop';
  const [selected, setSelected] = useState(defaultSelected);

  const handleShopClick = () => {
    navigate('/shop');
    setSelected("shop");
  };

  const handleGamesClick = () => {
    navigate('/my-games');
    setSelected("my-games");
  };

  const handleCommunityClick = () => {
    navigate('/community');
    setSelected("community");
  };

  const handleUnrealClick = () => {
    navigate('/unreal');
    setSelected("unreal");
  };

  return (
    <div className="h-screen ml-5 w-[217px] mt-[51px] fixed">
      <div className="flex justify-center mb-[28.09px]">
        <img src={EpicLogo} alt='epic-logo' />
      </div>
      <div className="flex flex-col items-center">
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "shop" ? "bg-secondary text-white rounded-[5px] font-bold" : ""} w-full cursor-pointer`} onClick={handleShopClick}><img src={shop_ico} /><span>Shop</span></span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "my-games" ? "bg-secondary text-white rounded-[5px] font-bold" : ""} w-full cursor-pointer`}onClick={handleGamesClick}><img src={games} /><span>My Games</span></span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "community" ? "bg-secondary text-white rounded-[5px] font-bold" : ""} w-full cursor-pointer`} onClick={handleCommunityClick}><img src={community} /><span>Community</span></span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "unreal" ? "bg-secondary text-white rounded-[5px] font-bold" : ""} w-full cursor-pointer`} onClick={handleUnrealClick}><img src={unreal} /><span>Unreal Engine</span></span>
      </div>
      <QuickStart />
      <div className="mt-[162px] flex gap-[10px] pl-5">
        <img src={doubleArrow} />
        <h2 className="font-medium text-base text-gray-100">Activate a Key</h2>
      </div>
    </div>
  );
};

export default SideBar;
