import React from 'react';
import { circleArrowLeft, circleArrowRight, rightArrow } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';

const SlickSlider = ({ games, title }) => {

  return (
    <div>
      <div className="mt-[42px] text-xl font-bold flex justify-between mb-[22.5px]">
        <div className="flex items-center">
          <span className="mr-[19px]">{title}</span>
          <img className="mt-1" src={rightArrow} />
        </div>
        <div className="flex gap-2">
          <img src={circleArrowLeft} className="cursor-pointer image-swiper-button-prev"/>
          <img src={circleArrowRight} className="cursor-pointer image-swiper-button-next" />
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={9}
        slidesPerView={5}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        className=" border-gray-300 mx-auto"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <img src={game.image} />
            <span>{game.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlickSlider;
