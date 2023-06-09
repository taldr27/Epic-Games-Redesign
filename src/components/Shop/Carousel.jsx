import React, { useEffect, useState } from 'react'
import { carouselImages } from '../../constants'
import { shadow } from '../../assets';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const goToNextImage = () => {
    setImageIndex(prevIndex => prevIndex < carouselImages.length - 1 ? prevIndex + 1 : 0);
  };
  
  useEffect(() => {
    const id = setInterval(goToNextImage, 6000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handleImageClick = (index) => {
    clearInterval(intervalId);
    setImageIndex(index);
    const id = setInterval(goToNextImage, 6000);
    setIntervalId(id);
  };

  const selected = "border-2 w-[113px]"
  return (
    <div className="relative rounded-md pb-[30%]">
      {carouselImages.map((image, index) => (
        <div key={image.name} className={`w-full absolute h-full fade ${index === imageIndex ? 'active' : ''}`}>
          <img src={image.image} alt={image.name} className="w-full"/>
          <img src={shadow} className="absolute inset-0 object-cover w-full h-full" />
          <img src={image.ico} alt={image.name} className="absolute top-[20%] 2xl:top-[25%] left-[61px] 2xl:w-40" />
          <div className="z-48 absolute top-[45%] 2xl:top-[45%] left-[61px] w-[350px]">
            <h2 className="text-base font-bold 2xl:text-3xl">GRANDES DESCUENTOS</h2>
            <p className="text-white text-sm">{image.description}</p>
          </div>
          {image.priceFull ? (
            <span className="font-bold absolute left-[61px] top-[64%]">
              Desde <span className="line-through">{image.priceFull}</span> AHORA{' '}
              <span className="text-white">{image.salePrice}</span>
            </span>
          ) : (
            <span className="font-bold absolute left-[61px] top-[64%]">FREE</span>
          )}
          <div className="absolute left-[61px] top-[74%] text-sm">
            <button className="bg-white text-black w-[151px] h-[53px] mr-[10px] font-bold">¡AHORRA HOY!</button>
            <button className="bg-transparent border-2 text-white w-[211px] h-[53px]">¡A LA LISTA DE DESEOS!</button>
          </div>
        </div>
      ))}
      <div className="absolute left-[46%] top-[10em] 2xl:top-[55%] 2xl:left-[55%] flex gap-[13px]">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image.cardImage}
            alt={image.cardImage}
            className={`cursor-pointer rounded-[10px] 2xl:w-28 ${index === imageIndex ? selected : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel
