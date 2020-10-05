import React, { useState } from "react";
import { Route } from "react-router-dom";
import styles from "./BrowseMovie.module.css";
import CategorySelect from "./CategorySelect/CategorySelect";
import MovieList from "./MovieList/MovieList";

const BrowseMovie = () => {
  const [categories, setCategories] = useState([
    { name: "Now Playing", link: "now_playing" },
    { name: "Popular", link: "popular" },
    { name: "Top Rated", link: "top_rated" },
    { name: "Upcoming", link: "upcoming" },
  ]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Browse by category</h2>
      <CategorySelect categories={categories} />
      <Route path="/movies/browse/:category">
        <MovieList />
      </Route>
    </div>
  );
};

export default BrowseMovie;
