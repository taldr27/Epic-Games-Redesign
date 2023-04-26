import React from 'react';
import { circleArrowLeft, circleArrowRight, rightArrow } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation } from 'swiper';

const SlickSlider = ({ games, title, arrows }) => {
  return (
    <div>
      <div className="mt-[42px] text-xl font-bold flex justify-between mb-5">
        <div className="flex items-center">
          <span className="mr-[19px]">{title}</span>
          <img className="mt-1" src={rightArrow} />
        </div>
        <div className="flex gap-2">
          <img src={circleArrowLeft} className={`bg-white rounded-full cursor-pointer ${arrows[0]}`}/>
          <img src={circleArrowRight} className={`bg-white rounded-full cursor-pointer ${arrows[1]}`} />
        </div>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: `.${arrows[1]}`,
          prevEl: `.${arrows[0]}`,
          disabledClass: "swiper-button-disabled"
        }}
        breakpoints={
          {
            500: {
              slidesPerView: 3,
              spaceBetween: 5
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20
            },
            1500: {
              slidesPerView: 6,
              spaceBetween: 20
            }
          }
        }
        className=" border-gray-300 mx-auto"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="text-sm relative">
            <img src={game.image} className="rounded-[5px] mb-[9px]" />
            {game.discount ? <button className="w-[52.94px] h-[30px] text-xs font-bold rounded-[5px] bg-blue-200 absolute bottom-[59px] left-[11.65px]">{game.discount }</button> : ''}
            <span className="block font-bold">{game.name}</span>
            <span className="line-through text-line-t">{game.salePrice}</span>{' '}<span>{game.fullPrice}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlickSlider;
