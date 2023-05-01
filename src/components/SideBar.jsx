import React, { useState } from 'react'
import { EpicLogo, community, games, shop_ico, unreal } from '../assets'
import { useNavigate } from 'react-router-dom';

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
    <div className="h-screen ml-5 w-[217px] mt-[51px]">
      <div className="flex justify-center mb-[28.09px]">
        <img src={EpicLogo} alt='epic-logo' />
      </div>
      <div className="flex flex-col items-center">
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "shop" ? "bg-secondary" : ""} w-full rounded-[5px] cursor-pointer`} onClick={handleShopClick}><img src={shop_ico} />Shop</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "my-games" ? "bg-secondary" : ""} w-full cursor-pointer`}onClick={handleGamesClick}><img src={games} />My Games</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "community" ? "bg-secondary" : ""} w-full cursor-pointer`} onClick={handleCommunityClick}><img src={community} />Community</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "unreal" ? "bg-secondary" : ""} w-full cursor-pointer`} onClick={handleUnrealClick}><img src={unreal} />Unreal Engine</span>
      </div>
    </div>
  );
};

export default SideBar;
