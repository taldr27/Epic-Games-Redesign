import React, { useState } from 'react'
import { SectionWrapper } from '../../../wrapper'
import ProfileTop from './ProfileTop';
import ProfileNav from './ProfileNav';
import ProfileResume from './ProfileResume';
import ProfileAchievements from './ProfileAchievements';
import ProfileCaptures from './ProfileCaptures';
import ProfileFriends from './ProfileFriends';
import ProfilePublications from './ProfilePublications';

const ProfileMain = () => {

  const [currentPage, setPage] = useState(<ProfileResume />);
  const [active, setActive] = useState("Resume");

  const onClickChange = (page) => {
    if (page === "Resume") {
      setPage(<ProfileResume />);
      setActive("Resume");
    }
    if (page === "Achievements") {
      setPage(<ProfileAchievements />);
      setActive("Achievements");
    }
    if (page === "Captures") {
      setPage(<ProfileCaptures />);
      setActive("Captures");
    }
    if (page === "Friends") {
      setPage(<ProfileFriends />);
      setActive("Friends");
    }
    if (page === "Publications") {
      setPage(<ProfilePublications />);
      setActive("Publications");
    }

  };

  return (
    <div className="mt-5 relative">
      <ProfileTop />
      <ProfileNav onClickChange={onClickChange} activeClass={active} />
      <div className="absolute top-[56%] w-full">
        {currentPage}
      </div>
    </div>
  )
}

export default SectionWrapper(ProfileMain, "profile");
