import React from 'react'
import SlickSlider from '../SlickSlider'
import { communityGames } from '../../constants'

const CommunityFeatured = () => {
  return (
    <div>
      <SlickSlider games={communityGames} title={"Destacado por la comunidad"} arrows={["cFleft", "cFright"]} />
    </div>
  )
}

export default CommunityFeatured
