import React from 'react'
import { profileRecentlyPlayed } from '../../../constants'
import { timePlayedSymbol, trophieSymbol } from '../../../assets'

const RecentlyPlayed = () => {
  return (
    <div className="flex gap-[15px] mb-5">
      {profileRecentlyPlayed.map((recentlyPlayedGame) => (
        <div key={recentlyPlayedGame.id} className="flex items-center bg-secondary w-[221px] h-[119px] rounded-[10px] gap-[10px]">
          <img src={recentlyPlayedGame.img} className="my-[11px] ml-[20.5px]" />
          <div className="w-[105px]">
            <h2 className="font-medium text-sm">{recentlyPlayedGame.gameTitle}</h2>
            <div className="flex items-center font-normal text-[13px]">
              <img src={timePlayedSymbol} className="mr-[2px]" />
              <span className="mr-[11px]">{recentlyPlayedGame.timePlayed}</span>
              <img src={trophieSymbol} className="mr-[5px]" />
              <span>{recentlyPlayedGame.trophies}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentlyPlayed
