import React, { useState } from 'react'
import { EpicLogo, community, games, shop_ico, unreal } from '../assets'
import MyGames from './MyGames/MyGames';
import BodyShop from './BodyShop';

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("tienda");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    console.log(menu);
  };

  let content = null;
  if (activeMenu === "shop") {
    content = <BodyShop />;
  } else if (activeMenu === "games") {
    content = <MyGames />;
  }

  return (
    <div className="h-screen ml-5 w-[217px] mt-[51px]">
      <div className="flex justify-center mb-[28.09px]">
        <img src={EpicLogo} />
      </div>
      <div className="flex flex-col items-center">
        <span className="flex gap-[12.34px] p-[17.91px] bg-secondary w-full rounded-[5px]" onClick={() => handleMenuClick("shop")}><img src={shop_ico} />Tienda</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full" onClick={() => handleMenuClick("games")}><img src={games} />Mis Juegos</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full"><img src={community} />Comunidad</span>
        <span className="flex gap-[12.34px] p-[17.91px]  w-full"><img src={unreal} />Unreal Engine</span>
      </div>
    </div>
  )
}

export default SideBar;
