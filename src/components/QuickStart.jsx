import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { miniQuick } from '../constants';

const QuickStart = () => {
  const [selected, setSelected] = useState("");
  const handleEnterChange = (index) => {
    setSelected(index);
  };
  const handleOutChange = () => {
    setSelected("");
  };

  return (
    <div className="w-[217px] h-[321px] mt-10">
      <h2 className="font-medium text-sm leading-[17.25px] mb-5">INICIO RAPIDO</h2>
      <ul className="">
        {miniQuick.map((miniGame, index) => (
          <li key={miniGame.id} className={`flex ${index === selected ? "bg-tertiary" : ""} items-center gap-2 p-2 rounded-md`} onMouseEnter={() => handleEnterChange(index)} onMouseLeave={() => handleOutChange(index)}>
            <img src={miniGame.img} />
            <div>
              <span>{miniGame.name.length > 12 ? `${miniGame.name.slice(0, 16)}...` : miniGame.name}</span>
              <div className={`${index === selected ? "block" : "hidden"} flex items-center gap-2`}>
                <FaPlay />
                <span>Play</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickStart
