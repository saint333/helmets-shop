'use client';

import { type Image as Imagetype } from "@/mocks/carrusel";
import Image from "next/image";
import  { useState, useEffect } from "react";

const Carousel = ({ images }: { images: Imagetype[] }) => {
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
            <div
              key={index}
              className='w-full flex-shrink-0'
            >
            <Image
              src={image.desktop}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className='!w-full !h-full !static object-contain hidden md:block'
            />
            <Image
              src={image.mobile}
              alt={`Slide ${index + 1}`}
              fill
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
      <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
