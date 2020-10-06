import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import styles from "./BrowseMovie.module.css";
import CategorySelect from "./CategorySelect/CategorySelect";
import MovieList from "./MovieList/MovieList";

const BrowseMovie = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const result = await res.data;
      setCategories(result.genres);
    };
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Browse by category</h2>
      <CategorySelect categories={categories} />
      <Switch>
        <Route path="/movies/browse/:category">
          <MovieList categories={categories} />
        </Route>
        <Route path="/all">
          <MovieList categories={categories} allMovies />
        </Route>
      </Switch>
    </div>
  );
};

export default BrowseMovie;
