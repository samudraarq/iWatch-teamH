import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
    {
      img: "https://picsum.photos/200/300",
      title: "batman",
      genre: "action",
    },
  ]);

  const { category } = useParams();

  const movRender = movies.map((movie, idx) => (
    <Link to="/" key={idx} className={styles.movie}>
      <img src={movie.img} alt="movie poster" className={styles.image} />
      <p className={styles.title}>{movie.title}</p>
      <p className={styles.genre}>{movie.genre}</p>
    </Link>
  ));

  return <div className={styles.listContainer}>{movRender}</div>;
};

export default MovieList;
