import React from 'react'
import styled from 'styled-components'
import Catcards from './Catcards'
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Categorycards() {
  return (
    <Category>
        <Swiper
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        990: {
            width: 768,
            slidesPerView: 3,
          },
          1400: {
            width: 768,
            slidesPerView: 3,
            spaceBetween:20
          },
      }}
    //   centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><Catcards url={'https://prod.spline.design/dPcOzlD72GE183p1/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/pZQp5IaLFq6Kb8Fe/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/VAYqPu06zNNNkBcw/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/3tZORjPl3LGgZQeW/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/0Kzo3fFbRNJuwChW/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/HDZuijvJD9JbJ1L1/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/8F3s5V2fEw9k-v1W/scene.splinecode'}/></SwiperSlide>
      <SwiperSlide><Catcards url={'https://prod.spline.design/WDXeDhAatPXxY-Gf/scene.splinecode'}/></SwiperSlide>
    </Swiper>
    </Category>
  )
}

const Category=styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 4rem 0;
    @media (max-width:990px) {
        margin: 1rem 0;
    }
`