import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./DetailsChar.module.css";

const DetailsChar = () => {
  const [chars, setChars] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const result = await res.data;
      console.log(result.cast);
      setChars(result.cast);
    };
    getMovies();
  }, [id]);

  const listChar = chars.map((char) => (
    <div key={char.id} className={styles.chars}>
      {char.profile_path === null ? (
        <p className={styles.image}>No profile picture</p>
      ) : (
        <img
          src={"https://image.tmdb.org/t/p/w500/" + char.profile_path}
          alt={char.name}
          className={styles.image}
        />
      )}

      <p className={styles.name}>{char.name}</p>
    </div>
  ));

  return <div className={styles.listContainer}>{listChar}</div>;
};

export default DetailsChar;
