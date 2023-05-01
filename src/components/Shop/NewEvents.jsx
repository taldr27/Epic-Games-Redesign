import React from 'react'
import { gameEvents } from '../../constants'
import SmallSlider from '../SmallSlider'

const NewEvents = () => {
  return (
    <div className="w-full h-[254px]">
      <SmallSlider title={"New Events"} games={gameEvents} arrows={["nEleft", "nEright"]} />
    </div>
  )
}

export default NewEvents
