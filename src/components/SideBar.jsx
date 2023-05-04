import React, { useState } from 'react'
import { EpicLogo, community, doubleArrow, games, shop_ico, unreal } from '../assets'
import { useNavigate } from 'react-router-dom';
import { miniQuick } from '../constants';

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
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "shop" ? "bg-secondary" : ""} w-full rounded-[5px] cursor-pointer`} onClick={handleShopClick}><img src={shop_ico} />Shop</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "my-games" ? "bg-secondary" : ""} w-full cursor-pointer`}onClick={handleGamesClick}><img src={games} />My Games</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "community" ? "bg-secondary" : ""} w-full cursor-pointer`} onClick={handleCommunityClick}><img src={community} />Community</span>
        <span className={`flex gap-[12.34px] p-[17.91px] ${selected === "unreal" ? "bg-secondary" : ""} w-full cursor-pointer`} onClick={handleUnrealClick}><img src={unreal} />Unreal Engine</span>
      </div>
      <div className="w-[217px] h-[321px] mt-10">
        <h2 className="font-medium text-sm leading-[17.25px] mb-5">INICIO RAPIDO</h2>
        <ul className="p-[10px]">
          {miniQuick.map((miniGame) => (
            <li key={miniGame.id} className="flex mb-[30px] items-center gap-2">
              <img src={miniGame.img} />
              <span>{miniGame.name.length > 12 ? `${miniGame.name.slice(0, 16)}...` : miniGame.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[162px] flex gap-[10px] pl-5">
        <img src={doubleArrow} />
        <h2 className="font-medium text-base text-gray-100">Canjear Producto</h2>
      </div>
    </div>
  );
};

export default SideBar;
