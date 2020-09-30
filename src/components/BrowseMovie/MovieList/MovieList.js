import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChangePage from "../ChangePage/ChangePage";
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
  const [maxPage, setMaxPage] = useState(100);

  const { category } = useParams();

  const movRender = movies.map((movie, idx) => (
    <Link
      to={`/movie/details/${idx}/overview`}
      key={idx}
      className={styles.movie}
    >
      <img src={movie.img} alt="movie poster" className={styles.image} />
      <p className={styles.title}>{movie.title}</p>
      <p className={styles.genre}>{movie.genre}</p>
    </Link>
  ));

  const handlePageChange = (e) => {
    console.log(e.selected);
  };

  return (
    <>
      <div className={styles.listContainer}>{movRender}</div>
      <ChangePage pageChange={handlePageChange} maxPage={maxPage} />
    </>
  );
};

export default MovieList;
