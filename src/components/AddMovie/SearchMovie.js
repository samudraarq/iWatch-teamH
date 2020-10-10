import React, { useEffect, useState } from "react";
import axios from "axios";
import ChangePage from "../BrowseMovie/ChangePage/ChangePage";
import AddMovie from "./AddMovie";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import styles from "./AddMovie.module.css";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${text}&page=${currentPage}`
      );
      const result = await res.data;
      //   console.log(result.results);
      setMaxPage(result.total_pages);
      setMovies(result.results);
    };
    getMovies();
  };

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${text}&page=${currentPage}`
      );
      const result = await res.data;
      //   console.log(result.results);
      setMovies(result.results);
    };
    getMovies();
  }, [currentPage, text]);

  const handlePageChange = (e) => {
    const selectedPage = e.selected + 1;
    setCurrentPage(selectedPage);
  };

  const renderAddMovie = movies.map((movie) => (
    <AddMovie movieId={movie.id} key={movie.id} />
  ));

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>Search Movies :</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className={styles.input}
          />
          <button className={styles.button}>Search</button>
        </form>

        {renderAddMovie}
        <ChangePage pageChange={handlePageChange} maxPage={maxPage} />
      </div>

      <Footer />
    </>
  );
};

export default SearchResult;
