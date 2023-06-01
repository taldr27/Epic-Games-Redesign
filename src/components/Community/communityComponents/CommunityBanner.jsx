import React from 'react'

const CommunityBanner = () => {
  return (
    <div className="w-full h-[165px] bg-community-banner">
      <div className=" flex flex-col items-center justify-center transbox h-full">
        <h2 className="font-bold text-[32px] text-shadow">Welcome to the Epic Games Community</h2>
        <span className="text-xl">¡Sigue a tus streamers favoritos, vota por nuevos juegos y crea contenido de tus juegos favoritos!</span>
      </div>
    </div>
  )
}

export default CommunityBanner
