import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';
import { gameAchievements } from '../../../constants';

const AchievementsSlider = ({ isRandom }) => {
  let random;
  const mergedArray = gameAchievements[0].achievementsArray.concat(gameAchievements[1].achievementsArray);
  mergedArray.sort(() => Math.random() - 0.5);
  random = mergedArray.slice(0, 5);
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ``,
          prevEl: ``,
          disabledClass: "swiper-button-disabled"
        }}
        breakpoints={
          {
            500: {
              slidesPerView: 5,
              spaceBetween: 5
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 20
            }
          }
        }
        className=" border-gray-300 mx-auto"
      >
        {isRandom ? 
          random.map((achievement, index) => (
            <div key={index} className="flex flex-col">
              <SwiperSlide key={achievement.achievementName}>
                <div className="flex gap-5">
                  <img src={achievement.achievementImage} />
                  <div className="flex flex-col">
                    <span>{achievement.gameName}</span>
                    <span>{achievement.achievementName}</span>
                    <span>{achievement.progress}</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          )) 
          : 
          gameAchievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col">
              {achievement.achievementsArray.map((element) => (
                <SwiperSlide key={element.achievementName}>
                  <div className="flex gap-5">
                    <img src={element.achievementImage} />
                    <div className="flex flex-col">
                      <span>{achievement.gameName}</span>
                      <span>{element.achievementName}</span>
                      <span>{element.progress}</span>
                    </div>
                  </div>
              </SwiperSlide>
              ))}
            </div>
          ))}
      </Swiper>
    </div>
  )
}

export default AchievementsSlider
