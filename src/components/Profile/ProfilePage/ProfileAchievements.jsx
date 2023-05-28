import React from 'react'
import AchievementsSlider from '../ProfileComponents/AchievementsSlider'

const ProfileAchievements = () => {
  return (
    <div className="flex flex-col">
      <AchievementsSlider isRandom={false} gameTitle={"Shadow of the Tomb Raider"} arrows={["TRaiderL", "TRaiderR"]} />
      <AchievementsSlider isRandom={false} gameTitle={"Marvel’s Spiderman Remastered"} arrows={["SpiderL", "SpiderR"]} />
    </div>
  )
}

export default ProfileAchievements
