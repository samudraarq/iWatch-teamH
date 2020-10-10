import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./SearchResult.module.css";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  // const [maxPage, setMaxPage] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);

  const { inputSearch } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://aqueous-savannah-95860.herokuapp.com/movie/find?search=${inputSearch}`
      );
      const result = await res.data;
      // console.log(result.results);
      // setMaxPage(result.total_pages);
      setMovies(result);
    };
    getMovies();
  }, [inputSearch]);

  const movRender = movies.map((movie) => {
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
      </Link>
    );
  });

  // const handlePageChange = (e) => {
  //   const selectedPage = e.selected + 1;
  //   setCurrentPage(selectedPage);
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.searchMovies}>Search Movies : {inputSearch}</h2>
      <div className={styles.listContainer}>{movRender}</div>
      {/* <ChangePage pageChange={handlePageChange} maxPage={maxPage} /> */}
    </div>
  );
};

export default SearchResult;
