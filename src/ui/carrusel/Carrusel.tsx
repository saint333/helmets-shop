"use client";
import { ImageCarruselType } from "@/types/carrusel";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = ({ images }: { images: ImageCarruselType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative w-full'>
      <div className='overflow-hidden relative'>
        <div
          className='flex transition-transform duration-700 ease-in-out h-[400px]'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className='w-full flex-shrink-0 relative'>
              <Image
                src={image.desktop}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(100vw, 100vh)"
                priority
                className='!w-full !h-full !static object-contain hidden md:block'
              />
              <Image
                src={image.mobile}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(100vw, 100vh)"
                priority
                className='!w-full !h-full !static object-contain md:hidden'
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full'
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full'
      >
        &#10095;
      </button>
      <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 gap-1'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            title={`Slide ${index + 1}`}
            className={`h-4 w-4 rounded-full ${
              currentIndex === index ? "bg-gray-300" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
