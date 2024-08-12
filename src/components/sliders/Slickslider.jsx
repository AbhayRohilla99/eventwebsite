import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
// import {Pagination } from 'swiper';

const Slickslider = () => {
  const images = [
    { src: 'venue1.jpg', text: '5 star weddings' },
    { src: 'venue2.jpg', text: 'destination weddings' },
    { src: 'venue3.jpg', text: 'banquet halls' },
    { src: 'venue1.jpg', text: '5 star weddings' },
    { src: 'venue2.jpg', text: 'destination weddings' },
    { src: 'venue3.jpg', text: 'banquet halls' },
  ];

  return (
    <div className="container mx-auto px-5 ">
      <Swiper
        effect='fade'
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center rounded-lg shadow-lg shadow-slate-500 h-[300px] my-3 overflow-hidden">
              <img
                src={image.src}
                alt={image.text}
                className="w-full h-full object-contains rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="text-white text-sm md:text-lg lg:text-xl text-center font-bold mb-2 md:mb-4">
                  {image.text}
                </h2>
                <button className="text-white bg-black hover:bg-gray-800 py-1 md:py-2 px-2 md:px-4 rounded-lg font-medium transition duration-150">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slickslider;
