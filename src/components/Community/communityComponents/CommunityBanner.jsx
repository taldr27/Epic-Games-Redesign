import React from 'react'
import { cpBanner } from '../../../assets';

const CommunityBanner = () => {
  return (
    <div className="w-full h-[165px] bg-community-banner">
      <div className=" flex flex-col items-center justify-center transbox h-full">
        <h2 className="font-bold text-[32px] text-shadow">Te damos la bienvenida a la comunidad de Epic Games</h2>
        <span className="text-xl">¡Sigue a tus streamers favoritos, vota por nuevos juegos y crea contenido de tus juegos favoritos!</span>
      </div>
    </div>
  )
}

export default CommunityBanner
