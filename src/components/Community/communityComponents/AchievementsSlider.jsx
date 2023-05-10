import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';
import { gameAchievements } from '../../../constants';
import { circleArrowLeft, circleArrowRight } from '../../../assets';

const AchievementsSlider = ({ isRandom, banner, gameTitle, arrows }) => {
  let contentGames;
  const mergedArray = gameAchievements.reduce((acc, obj) => acc.concat(obj.achievementsArray), []);
  const mergedRandom = mergedArray.sort(() => Math.random() - 0.5).slice(0, 5);
  const separateGames = mergedArray.filter((merged) => merged.gameName === gameTitle);
  
  gameTitle ? contentGames = separateGames : contentGames = mergedRandom;
  console.log(arrows)
  return (
    <div>
      <div className="mt-[42px] text-xl font-bold flex justify-between mb-5">
        <div className="flex items-center">
          <span className="font-bold text-xl">{banner ? banner : gameTitle} | {banner ? mergedArray.length : separateGames.length}</span>
        </div>
        {banner ? "" :
          <div className="flex gap-2">
            <img src={circleArrowLeft} className={`bg-white rounded-full cursor-pointer ${arrows[0]}`}/>
            <img src={circleArrowRight} className={`bg-white rounded-full cursor-pointer ${arrows[1]}`} />
          </div>
        }
      {console.log("asdasdasd", `${banner ? "" : `.${arrows[0]}`}`)}
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: `${banner ? "" : `.${arrows[0]}`}`,
          nextEl: `${banner ? "" : `.${arrows[1]}`}`,
          disabledClass: "swiper-button-disabled"
        }}
        breakpoints={
          {
            500: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 15,
            }
          }
        }
        className="w-full"
      >
        {isRandom ? 
          contentGames.map((achievement, index) => (
            <div key={index} className="">
              <SwiperSlide key={index}>
                <div className="flex gap-[10px] h-[96px] rounded-[10px] items-center  bg-secondary mt-4">
                  <img src={achievement.achievementImage} className="ml-[21px]" />
                  <div className="w-[105px] my-3 mr-[21px]">
                    <h2 className="font-medium text-sm">{achievement.achievementName}</h2>
                    <div className="flex flex-col">
                      <div className="w-[79px]">
                        {achievement.completed ? "" :                     
                          <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 my-[7px]">
                            <div className={"bg-blue-600 h-1 rounded-full"} style={{ width: `${achievement.progress}%` }}></div>
                          </div>
                        }
                      </div>
                      <span className="font-medium text-[10px]">{achievement.gameName}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          )) 
          : 
          contentGames.map((achievement, index) => (
            <div key={index} className="">
              <SwiperSlide key={index}>
                <div className="flex gap-[10px] h-[96px] rounded-[10px] items-center  bg-secondary mt-4">
                  <img src={achievement.achievementImage} className="ml-[21px]" />
                  <div className="w-[105px] my-3 mr-[21px]">
                    <h2 className="font-medium text-sm">{achievement.achievementName}</h2>
                    <div className="flex flex-col">
                      <div className="w-[79px]">
                        {achievement.completed ? "" :                     
                          <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 my-[7px]">
                            <div className={"bg-blue-600 h-1 rounded-full"} style={{ width: `${achievement.progress}%` }}></div>
                          </div>
                        }
                      </div>
                      <span className="font-medium text-[10px]">{achievement.gameName}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </div>
  )
}

export default AchievementsSlider
