import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import carrusel_1 from './img/carrusel_1.png';
import carrusel_2 from './img/carrusel_2.png';
import carrusel_3 from './img/carrusel_3.png';
import carrusel_4 from './img/carrusel_4.png';
import carrusel_5 from './img/carrusel_1.png';
import carrusel_6 from './img/carrusel_2.png';
import carrusel_7 from './img/carrusel_3.png';
import carrusel_8 from './img/carrusel_4.png';

function Carrusel() {
  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px', // Ajusta el valor del padding según tus necesidades
    width: '45rem',
  };

  return (
    <div className="container carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_1} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_2} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_3} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_4} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_5} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_6} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_7} alt="slide_image" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle}>
          <img src={carrusel_8} alt="slide_image" className="swiper-image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carrusel;
