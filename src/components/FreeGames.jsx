import React from 'react'
import { giftIco } from '../assets'
import { freeGames } from '../constants';

const FreeGames = () => {
  const leftGames = freeGames.slice(0, 2);
  const rightGames = freeGames.slice(2, 4);

return (
  <div className="w-full bg-secondary rounded-[5px] h-[552px] 2xl:h-[680px] mt-10 pl-[21px] 2xl:pl-[37px] pr-[24px]">
    <div className="flex gap-[13px] items-center pt-[23.5px] mb-5">
      <img src={giftIco} />
      <span className="text-xl font-bold">Juegos Gratuitos</span>
    </div>
    <div className="flex gap-5 text-sm">
      <div className="flex gap-5 relative">
        {leftGames.map((game) => (
          <div key={game.id} className="relative 2xl:w-11/12">
            <img src={game.image} className="2xl:w-[60em]" />
            <div className="absolute top-[15px] left-[19px]">
              <button className={`${game.cardColor} w-[121px] h-[34.76px] absolute rounded-[5px] text-sm font-medium text-center`}>
                {game.card}
              </button>  
            </div>
            <span className="block font-bold mt-[14px]">{game.name}</span>
            <span className="text-line-t">{game.date}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 relative 2xl:w-9/12">
        {rightGames.map((game) => (
          <div key={game.id} style={{ position: 'relative' }}>
            <img src={game.image} className="2xl:w-[40em]" />
            <div className="absolute top-[15.65px] left-[19px]">
              <button className={`${game.cardColor} w-[121px] h-[34.76px] absolute rounded-[5px] text-sm font-medium text-center`}>
                {game.card}
              </button>
            </div>
            <span className="block font-bold mt-3">{game.name}</span>
            <span className="text-line-t">{game.date}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default FreeGames
