import React from 'react'
import { circleArrowLeft, circleArrowRight, rightArrow, shadowEvent } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';

const SmallSlider = ({title, games}) => {
  return (
    <div>
      <div className="mt-[42px] text-xl font-bold flex justify-between mb-5">
        <div className="flex items-center">
          <span className="mr-[19px]">{title} (Arrows not working yet, try dragging!)</span>
          <img className="mt-1" src={rightArrow} />
        </div>
        <div className="flex gap-2">
          <img src={circleArrowLeft} className="bg-white rounded-full cursor-pointer image-swiper-button-prev"/>
          <img src={circleArrowRight} className="bg-white rounded-full cursor-pointer image-swiper-button-next" />
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={9}
        slidesPerView={3}
        // navigation={{
        //   nextEl: ".image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled"
        // }}
        className=" border-gray-300 mx-auto"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="text-sm relative">
            <img src={game.image} className="rounded-[5px] mb-[9px]" />
            <img src={shadowEvent} className="absolute inset-0 h-full" />
            <div className="absolute left-[24.85px] bottom-[22px]">
              <span className="block text-xl font-bold">{game.title}</span>
              <span className="text-base">{game.description}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SmallSlider
