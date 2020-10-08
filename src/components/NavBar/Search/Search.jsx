import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      history.push(`/search/${input}`);
    }
  };

  return (
    <div
      className={styles.searchBox}
      onMouseEnter={() => setOpenSearch(true)}
      onMouseLeave={() => setOpenSearch(false)}
    >
      <input
        type="text"
        className={`${styles.input} ${openSearch && styles.opened}`}
        placeholder="Search movies"
        onChange={handleChange}
        onKeyUp={handleSubmit}
      ></input>
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
};

export default Search;
