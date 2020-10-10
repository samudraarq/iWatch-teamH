import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangePage from "../ChangePage/ChangePage";
import styles from "./MovieList.module.css";

const MovieList = ({ categories, allMovies }) => {
  const [movies, setMovies] = useState([]);
  const [maxPage, setMaxPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      if (allMovies) {
        const res = await axios.get(
          // `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${currentPage}`
          `https://aqueous-savannah-95860.herokuapp.com/movie/${currentPage}`
        );
        const result = await res.data;
        // console.log(result.results);
        // setMaxPage(result.total_pages);
        setMovies(result);
        // } else {
        //   const res = await axios.get(
        //     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${currentPage}&with_genres=${category}`
        //   );
        //   const result = await res.data;
        //   // console.log(result.results);
        //   setMaxPage(result.total_pages);
        //   setMovies(result.results);
      }
    };
    getMovies();
  }, [currentPage, category, allMovies]);

  const movRender = movies.map((movie) => {
    // const genres = movie.genre_ids.map((id) =>
    //   categories.find((obj) => obj.id === id)
    // );

    return (
      <Link
        to={`/movie/details/${movie.id}/overview`}
        key={movie.id}
        className={styles.movie}
      >
        {movie.poster_path === null ? (
          <p className={styles.image}>
            <span>No poster</span>
          </p>
        ) : (
          <div className={styles.imageContainer}>
            <figure className={styles.hoverEffect}>
              <img
                // src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                src={movie.img_url_poster}
                alt="movie poster"
                className={styles.image}
              />
              <figcaption>
                <h2>{movie.title}</h2>
                {/* <p>{movie.overview.slice(0, 100)}...</p> */}
              </figcaption>
            </figure>
          </div>
        )}
        <p className={styles.title}>{movie.title}</p>
        <div className={styles.genre}>
          {/* {genres?.map((genre, idx) => (
            <span key={idx}>{genre?.name}</span>
          ))} */}
          <span>{movie.genre}</span>
        </div>
      </Link>
    );
  });

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
