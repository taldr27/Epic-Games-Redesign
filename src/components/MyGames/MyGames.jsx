import React from 'react'
import { SectionWrapper } from '../../wrapper';
import { recentMyGames } from '../../constants';
import RecentGamesSlider from './RecentGamesSlider';
import SearchBarMG from './SearchBarMG';
import PlayableGames from './PlayableGames';

const MyGames = () => {
  return (
    <div className="">
      <RecentGamesSlider title={"Last Played Games"} games={recentMyGames} arrows={["nEleft", "nEright"]} />
      <SearchBarMG />
      <PlayableGames />
    </div>
  )
}

export default SectionWrapper(MyGames, "my-games");
