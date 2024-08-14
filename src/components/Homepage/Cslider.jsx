import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Cslider.css';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

function Cslider() {
  return (
    <div className="container">
      <h1 className="heading capitalize">popular searches</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <img src={`product${index % 2 + 1}.jpg`} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}

export default Cslider;

