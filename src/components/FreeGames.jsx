import React from 'react'
import { giftIco } from '../assets'

const FreeGames = () => {
  return (
    <div className="w-full bg-secondary rounded-[5px] h-[552px] mt-10 pl-[21px] pr-[24px]">
      <div className="flex gap-[13px] items-center pt-[23.5px] mb-5">
        <img src={giftIco} />
        <span className="text-xl font-bold">Juegos Gratuitos</span>
      </div>
      <div className="flex">
        <div>
          Left
        </div>
        <div>
          Right
        </div>
      </div>
    </div>
  )
}

export default FreeGames
