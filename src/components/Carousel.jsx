import React, { useEffect, useState } from 'react'
import { carouselImages } from '../constants'
import { shadow } from '../assets';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  
  const goToNextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex < carouselImages.length - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const selected = "border-2 w-[113px] rounded-[10px]"
  return (
    <div className="relative rounded-md">
      <img
        src={carouselImages[imageIndex].image}
        alt={carouselImages[imageIndex].name}
        className="w-full"
      />
      <img
        src={shadow}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <img
        src={carouselImages[imageIndex].ico}
        alt={carouselImages[imageIndex].name}
        className="absolute top-[20%] 2xl:top-[25%] left-[61px] 2xl:w-40"
      />
      <div className="z-50 absolute top-[45%] 2xl:top-[45%] left-[61px] w-[350px]">
        <h2 className="text-base font-bold 2xl:text-3xl">GRANDES DESCUENTOS</h2>
        <p className="text-white text-sm">{carouselImages[imageIndex].description}</p>      
      </div>
      <span className="font-bold absolute left-[61px] top-[64%]">Desde <span className="line-through">{carouselImages[imageIndex].priceFull}</span> AHORA <span className="text-white">{carouselImages[imageIndex].salePrice}</span></span>
      <div className="absolute left-[61px] top-[74%] text-sm">
        <button className="bg-white text-black w-[151px] h-[53px] mr-[10px]">¡AHORRA HOY!</button>
        <button className="bg-transparent border-2 text-white w-[211px] h-[53px]">¡A LA LISTA DE DESEOS!</button>
      </div>
      <div className="absolute left-[46%] top-[46%] flex gap-[13px]">
        {carouselImages.map((image) => (
          <img
          key={image.name}
          src={image.cardImage}
          alt={image.cardImage}
          className={carouselImages[imageIndex].name === image.name ? selected : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
