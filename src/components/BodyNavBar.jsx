import React from 'react'

const BodyNavBar = ({ elements }) => {
  return (
    <div className="bg-secondary h-[43px] flex items-center pl-[30px] z-50 px-10">
      {elements.map((element) => (
        <span className="mr-10 font-bold" key={element}>{element}</span>
      ))}
    </div>
  )
}

export default BodyNavBar
