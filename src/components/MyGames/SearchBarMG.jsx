import React from 'react'

const SearchBarMG = () => {
  return (
    <div className="mt-11 mb-[29px] bg-slate-800 h-11 flex justify-between">
      <ul className="flex">
        <span>Ordenar por:</span>
        <li><span> Orden Alfabetico</span> <span>Flecha</span></li>
        <li> <span>Ver en:</span><span>Tarjetas</span><span>Flecha</span></li>
      </ul>
      <ul className="flex">
        <li><span>Lupa</span></li>
        <li><span>Genero</span><span>Flecha</span></li>
        <li><span>Caracteristicas</span><span>Flecha</span></li>
        <li><span>Plataforma</span><span>Flecha</span></li>
      </ul>
       
     
      
    </div>
  )
}

export default SearchBarMG;
