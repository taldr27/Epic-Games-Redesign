import React from 'react'
import { giftIco } from '../assets'
import { freeGames } from '../constants';

const FreeGames = () => {
  const leftGames = freeGames.slice(0, 2);
  const rightGames = freeGames.slice(2, 4);

  return (
    <div className="w-full bg-secondary rounded-[5px] h-[552px] mt-10 pl-[21px] pr-[24px]">
      <div className="flex gap-[13px] items-center pt-[23.5px] mb-5">
        <img src={giftIco} />
        <span className="text-xl font-bold">Juegos Gratuitos</span>
      </div>
      <div className="flex gap-5 text-sm">
        <div className="flex gap-5 ">
          {leftGames.map(game => (
            <div key={game.id}>
              <img src={game.image} />
              <span className="block font-bold mt-[14px]">{game.name}</span>
              <span className="text-line-t">{game.date}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {rightGames.map(game => (
            <div key={game.id}>
              <img src={game.image} className="" />
              <span className="block font-bold mt-3">{game.name}</span>
              <span className="text-line-t">{game.date}</span>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FreeGames
