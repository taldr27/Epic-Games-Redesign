import React, { useEffect, useState } from 'react'
import { carouselImages } from '../constants'
import { shadow } from '../assets';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }
  useEffect(() => {
    setInterval(goToNextImage, 8000);
  }, []);
  return (
    <div className="relative rounded-md">
      <img
        src={carouselImages[currentImageIndex].image}
        alt={carouselImages[currentImageIndex].name}
        className="w-full"
      />
      <img
        src={shadow}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <img
        src={carouselImages[currentImageIndex].ico}
        alt={carouselImages[currentImageIndex].name}
        className="absolute top-[20%] 2xl:top-[25%] left-[61px]"
      />
      <div className="z-50 absolute top-[45%] 2xl:top-[45%] left-[61px] w-[290px]">
        <h2 className="text-base font-bold">GRANDES DESCUENTOS</h2>
        <p className="text-white text-sm">{carouselImages[currentImageIndex].description}</p>      
      </div>
      <span className="font-bold absolute left-[61px] top-[64%]">Desde {carouselImages[currentImageIndex].priceFull} AHORA <span className="text-white">{carouselImages[currentImageIndex].salePrice}</span></span>
    </div>
  )
}

export default Carousel
