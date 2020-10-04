import React, { useState } from "react";
import { Route } from "react-router-dom";
import styles from "./BrowseMovie.module.css";
import CategorySelect from "./CategorySelect/CategorySelect";
import MovieList from "./MovieList/MovieList";

const BrowseMovie = () => {
  const [categories, setCategories] = useState([
    "all",
    "action",
    "comedy",
    "horor",
    "anime",
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
