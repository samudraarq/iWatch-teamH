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
    <div className={styles.searchBox}>
      <input
        type="text"
        className={`${styles.input} ${openSearch && styles.opened}`}
        placeholder="Search movies"
        onChange={handleChange}
        onKeyUp={handleSubmit}
        onBlur={() => setOpenSearch(false)}
      ></input>

      <SearchIcon
        className={styles.searchIcon}
        onClick={() => setOpenSearch(true)}
      />
    </div>
  );
};

export default Search;
