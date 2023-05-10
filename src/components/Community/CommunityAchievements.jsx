import React from 'react'
import Achievements from './communityComponents/Achievements'
import AchievementsSlider from './communityComponents/AchievementsSlider'

const CommunityAchievements = () => {
  return (
    <div className="flex flex-col gap-[22.5px]">
      <AchievementsSlider isRandom={false} gameTitle={"Shadow of the Tomb Raider"} arrows={["TRaiderL", "TRaiderR"]} />
      <AchievementsSlider isRandom={false} gameTitle={"Marvel’s Spiderman Remastered"} arrows={["SpiderL", "SpiderR"]} />
    </div>
  )
}

export default CommunityAchievements
