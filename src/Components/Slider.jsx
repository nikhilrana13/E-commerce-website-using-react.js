import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import slider images
 
import img1 from '/Sliderimages/img1.jpg'
import img2 from '/Sliderimages/img2.jpg'
import img3 from '/Sliderimages/img3.jpg'
import img4 from '/Sliderimages/img4.jpg'
import img5 from '/Sliderimages/img5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';


function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <>
    <div className='swiper-container w-full h-screen'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

    </div>
 
    </>
  )
}

export default Slider