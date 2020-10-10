import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import axios from "axios";
import "swiper/swiper-bundle.min.css";
import styles from "./Carousel.module.css";

SwiperCore.use([Autoplay, EffectFade]);

const Carousel = () => {
  const [movies, setMovies] = useState([{}, {}, {}, {}, {}]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://aqueous-savannah-95860.herokuapp.com/movie/1`
      );
      const result = await res.data;
      setMovies(result.slice(0, 5));
    };
    getMovies();
  }, []);

  const slides = movies.map((movie, idx) => (
    <SwiperSlide key={idx}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src={movie.img_url_backdrop}
          alt={"movie poster"}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.container}>
      <Swiper
        id="main"
        tag="section"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        effect="fade"
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Carousel;
