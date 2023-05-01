import React from 'react'
import SlickSlider from '../SlickSlider'
import { recentUpdated } from '../../constants'

const RecentUpdated = () => {
  return (
    <div>
      <SlickSlider games={recentUpdated} title={"Recently Updated"} arrows={["rUleft", "rUright"]} />
    </div>
  )
}

export default RecentUpdated
