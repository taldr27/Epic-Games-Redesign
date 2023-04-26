import React from 'react'
import SlickSlider from '../SlickSlider'
import { saleGames } from '../../constants';

const EditorSales = () => {
  return (
    <div>
      <SlickSlider games={saleGames} title={"Ofertas del Editor"} arrows={["eSleft", "eSright"]} />
    </div>
  )
}

export default EditorSales
