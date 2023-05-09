import React from 'react';
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
        className="w-full"
      >
        {isRandom ? 
          random.map((achievement, index) => (
            <div key={index} className="">
              <SwiperSlide key={achievement.achievementName} className="">
                <div className="flex gap-[10px] w-[221px] h-[96px] rounded-[10px] items-center  bg-secondary mt-4">
                  <img src={achievement.achievementImage} className="ml-[21px]" />
                  <div className="w-[105px]">
                    <h2 className="font-medium text-sm">{achievement.achievementName}</h2>
                    <div className="flex flex-col">
                      <span className="font-medium text-[10px]">{achievement.progress}</span>
                      <span className="font-medium text-[10px]">{achievement.gameName}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          )) 
          : 
          gameAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center bg-secondary w-[221px] rounded-[10px] gap-[10px]">
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
