import React from 'react'

const BodyBar = ({ elements }) => {
  return (
    <div className="bg-secondary h-[43px] flex items-center fixed z-[100000000] w-full pl-[30px]">
      {elements.map((element) => (
        <span className="mr-10 font-bold">{element}</span>
      ))}
    </div>
  )
}

export default BodyBar
