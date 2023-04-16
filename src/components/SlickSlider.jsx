import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const SlickSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="border-2 border-gray-300 mx-auto"
    >
      <SwiperSlide className="bg-gray-100 p-4">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 4</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-gray-100 p-4">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SlickSlider;
