import React from 'react'
import { circleArrowLeft, circleArrowRight, rightArrow, shadowEvent } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';

const RecentGamesSlider = ({title, games, arrows}) => {
  return (
    <div>
      <div className="mt-[42px] text-xl font-bold flex justify-between mb-5">
        <div className="flex items-center">
          <span className="mr-[19px]">{title}</span>
        </div>
        <div className="flex gap-2">
          <img src={circleArrowLeft} className={`bg-white rounded-full cursor-pointer ${arrows[0]}`}/>
          <img src={circleArrowRight} className={`bg-white rounded-full cursor-pointer ${arrows[1]}`}/>
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        breakpoints={
          {
            500: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
        }
        navigation={{
          nextEl: `.${arrows[1]}`,
          prevEl: `.${arrows[0]}`,
          disabledClass: "swiper-button-disabled"
        }}
        className=" border-gray-300 mx-auto"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="text-sm relative">
            <img src={game.image} alt={game.title} className="rounded-[5px]" />
            <img src={shadowEvent} className="absolute inset-0 h-full" />
            <div className="absolute left-[24.85px] bottom-[22px]">
              <span className="block text-xl font-bold">{game.title}</span>
              <span className="block text-[15px]">Tiempo jugado esta semana: {game.weeklyPlayedTime} horas</span>
              <span className="text-base">Total: {game.totalPlayedTime} horas</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecentGamesSlider
