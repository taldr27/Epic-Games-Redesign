import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RxMagnifyingGlass } from 'react-icons/rx';

const SearchBarMG = () => {
  return (
    <div className="mt-11 mb-[29px] h-11 flex justify-between py-3 px-[10px]">
      <ul className="flex items-center gap-2">
        <span className="font-bold">Ordenar por:</span>
        <li className="flex items-center"><span> Orden Alfabetico</span> <IoIosArrowDown className="ml-[15px] text-lg" /></li>
        <span className="font-bold ml-[25px]">Ver en:</span>
        <li className="flex items-center "> <span>Tarjetas</span><IoIosArrowDown className="ml-[15px] text-lg" /></li>
      </ul>
      <ul className="flex items-center">
        <li><RxMagnifyingGlass className="text-2xl mr-[33px]" /></li>
        <li className="flex items-center mr-[45px]"><span>Genero</span><IoIosArrowDown className="ml-[15px] text-lg" /></li>
        <li className="flex items-center mr-[45px]"><span>Caracteristicas</span><IoIosArrowDown className="ml-[15px] text-lg" /></li>
        <li className="flex items-center"><span>Plataforma</span><IoIosArrowDown className="ml-[15px] text-lg" /></li>
      </ul>  
    </div>
  )
}

export default SearchBarMG;
