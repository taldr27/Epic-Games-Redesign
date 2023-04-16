import React from 'react'
import SlideBar from './SlideBar'
import SlickSlider from './SlickSlider'
import { saleGames } from '../constants';

const EditorSales = () => {
  return (
    <div className="">
      <SlickSlider games={saleGames} title={"Ofertas del Editor"} />
    </div>
  )
}

export default EditorSales
