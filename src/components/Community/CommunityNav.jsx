import React from 'react'

const CommunityNav = ({ onClickChange, activeClass }) => {
  const handlePageClick = (page) => () => {
    onClickChange(page);
  };

  return (
    <nav className="absolute top-[239px] w-full h-[43px] 2xl:top-[40%] mb-[28px]">
      <ul className="flex gap-10 items-center h-full font-bold text-gray-100 cursor-pointer">
        <li
          className={`ml-[32px] 2xl:ml-[8%] ${activeClass === "Resume" ? "text-white underline underline-offset-8" : ""}`} 
          onClick={handlePageClick("Resume")}
        >
          Resume
        </li>
        <li 
          className={`${activeClass === "Achievements" ? "text-white underline underline-offset-8" : ""}`} 
          onClick={handlePageClick("Achievements")}
        >
          Achievements
        </li>
        <li
          className={`${activeClass === "Captures" ? "text-white underline underline-offset-8" : ""}`}
          onClick={handlePageClick("Captures")}
        >
          Captures
        </li>
        <li
          className={`${activeClass === "Friends" ? "text-white underline underline-offset-8" : ""}`} 
          onClick={handlePageClick("Friends")}
        >
          Friends
        </li>
        <li 
          className={`${activeClass === "Publications" ? "text-white underline underline-offset-8" : ""}`} 
          onClick={handlePageClick("Publications")}
        >
          Publications
        </li>
      </ul>
    </nav>
  )
}

export default CommunityNav
