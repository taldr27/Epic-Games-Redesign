import React, { useState } from 'react'
import { SectionWrapper } from '../../wrapper'
import CommunityTop from './CommunityTop';
import CommunityNav from './CommunityNav';
import CommunityResume from './CommunityResume';
import CommunityAchievements from './CommunityAchievements';
import CommunityCaptures from './CommunityCaptures';
import CommunityFriends from './CommunityFriends';
import CommunityPublications from './CommunityPublications';

const CommunityMain = () => {

  const [currentPage, setPage] = useState(<CommunityResume />);
  const [active, setActive] = useState("Resume");

  const onClickChange = (page) => {
    if (page === "Resume") {
      setPage(<CommunityResume />);
      setActive("Resume");
    }
    if (page === "Achievements") {
      setPage(<CommunityAchievements />);
      setActive("Achievements");
    }
    if (page === "Captures") {
      setPage(<CommunityCaptures />);
      setActive("Captures");
    }
    if (page === "Friends") {
      setPage(<CommunityFriends />);
      setActive("Friends");
    }
    if (page === "Publications") {
      setPage(<CommunityPublications />);
      setActive("Publications");
    }

  };

  return (
    <div className="mt-5 relative">
      <CommunityTop />
      <CommunityNav onClickChange={onClickChange} activeClass={active} />
      <div className="absolute top-[300px]">
        {currentPage}
      </div>
    </div>
  )
}

export default SectionWrapper(CommunityMain, "community");
