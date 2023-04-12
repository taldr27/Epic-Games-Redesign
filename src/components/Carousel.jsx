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
        className="absolute top-[20%] 2xl:top-[25%] left-[61px] 2xl:w-40"
      />
      <div className="z-50 absolute top-[45%] 2xl:top-[45%] left-[61px] w-[350px]">
        <h2 className="text-base font-bold 2xl:text-3xl">GRANDES DESCUENTOS</h2>
        <p className="text-white text-sm">{carouselImages[currentImageIndex].description}</p>      
      </div>
      <span className="font-bold absolute left-[61px] top-[64%]">Desde <span className="line-through">{carouselImages[currentImageIndex].priceFull}</span> AHORA <span className="text-white">{carouselImages[currentImageIndex].salePrice}</span></span>
      <div className="absolute left-[61px] top-[74%] text-sm">
        <button className="bg-white text-black w-[151px] h-[53px] mr-[10px]">¡AHORRA HOY!</button>
        <button className="bg-transparent border-2 text-white w-[211px] h-[53px]">¡A LA LISTA DE DESEOS!</button>
      </div>
    </div>
  )
}

export default Carousel
