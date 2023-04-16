import React from 'react'
import SlickSlider from './SlickSlider'
import { communityGames } from '../constants'

const RecentUpdated = () => {
  return (
    <div>
      <SlickSlider games={communityGames} title={"Actualizado recientemente"} />
    </div>
  )
}

export default RecentUpdated
