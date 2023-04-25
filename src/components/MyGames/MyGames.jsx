import React from 'react'
import { SectionWrapper } from '../../wrapper';
import { recentMyGames } from '../../constants';
import RecentGamesSlider from './RecentGamesSlider';
import SearchBarMG from './SearchBarMG';

const MyGames = () => {
  return (
    <div className="mt-5">
      <RecentGamesSlider title={"Reciente"} games={recentMyGames} arrows={["nEleft", "nEright"]} />
      <SearchBarMG />
    </div>
  )
}

export default SectionWrapper(MyGames, "my-games");
