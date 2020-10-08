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
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const result = await res.data;
      setMovies(result.results.slice(0, 5));
    };
    getMovies();
  }, []);

  const slides = movies.map((movie, idx) => (
    <SwiperSlide key={idx}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
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
