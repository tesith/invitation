// Import Swiper React components
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from '../image.js';
import img1 from '../../assets/image-gallery/img1.jpg';
import img2 from '../../assets/image-gallery/img2.jpg';
import img3 from '../../assets/image-gallery/img3.jpg';
import img4 from '../../assets/image-gallery/img4.jpg';
import img5 from '../../assets/image-gallery/img5.jpg';

import './gallery.css';

const Gallery = ({style}) => {
  const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
  const [swiper, setSwiper] = useState(null); // -> 슬라이드용
  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }

  const customStyles = {
      width: "90%",
      height: "auto",
      mode: "contain"
  }

  return (
    <Swiper style={style}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        clickable: true,
        type: 'bullets',

      }}
      modules={[Pagination, Autoplay, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)}
      onSwiper={(e) => {setSwiper(e)}}
      autoplay={{ // 자동 재생
        delay: 7000, // 지연 시간 (한 슬라이더에 머물르는 시간)
        disableOnInteraction: false, // 마우스 제어 이후 자동 재생을 막을지 말지
      }}
      speed={600} // 슬라이더 넘어가는 속도
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      zoom={{
        maxRatio: 3,
        minRatio: 1,
      }}
    >
      <SwiperSlide className="slide">
        <img src={img1} style={customStyles} />
      </SwiperSlide>
      <SwiperSlide className="slide"><img src={img2} style={customStyles}/></SwiperSlide>
      <SwiperSlide className="slide"><img src={img3} style={customStyles}/></SwiperSlide>
      <SwiperSlide className="slide"><img src={img4} style={customStyles}/></SwiperSlide>
      <SwiperSlide className="slide"><img src={img5} style={customStyles}/></SwiperSlide>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Gallery;