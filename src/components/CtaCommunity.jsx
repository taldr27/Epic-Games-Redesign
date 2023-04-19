import React from 'react'
import { ctaCommunity } from '../assets'

const CtaCommunity = () => {
  return (
    <div className="flex justify-between 2xl:justify-center mt-10 w-full blue-gradient h-[272px] rounded-[5px]">
      <div className="flex flex-col ml-[104px] justify-center gap-5 leading-10 w-[393px]">
        <h1 className="text-[32px] font-bold">¡Llego la comunidad a Epic Games Store!</h1>
        <span className="leading-5">Mira, crea y comparte contenido de tus juegos favoritos</span>
        <button className="bg-white text-black w-[151px] h-[53px] mr-[10px] font-bold">Explorar</button>
      </div>
      <img src={ctaCommunity} alt='ctaCommunity' className="h-[257px] self-end mr-[67.37px]" />
    </div>
  )
}

export default CtaCommunity
