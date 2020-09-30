import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import styles from "./Carousel.module.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          className={styles.image}
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <div className={styles.container}>
      <Swiper
        id="main"
        tag="section"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination
        autoplay={{ delay: 4000 }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Carousel;
