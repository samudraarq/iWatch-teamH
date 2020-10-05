import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangePage from "../ChangePage/ChangePage";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${currentPage}`
      );
      const result = await res.data;
      console.log(result.results);
      setMaxPage(result.total_pages);
      setMovies(result.results);
    };
    getMovies();
  }, [currentPage]);

  const movRender = movies.map((movie) => (
    <Link
      to={`/movie/details/${movie.id}/overview`}
      key={movie.id}
      className={styles.movie}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt="movie poster"
        className={styles.image}
      />
      <p className={styles.title}>{movie.title}</p>
      {/* <p className={styles.genre}>{movie.genre}</p> */}
    </Link>
  ));

  const handlePageChange = (e) => {
    const selectedPage = e.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <div className={styles.listContainer}>{movRender}</div>
      <ChangePage pageChange={handlePageChange} maxPage={maxPage} />
    </>
  );
};

export default MovieList;
