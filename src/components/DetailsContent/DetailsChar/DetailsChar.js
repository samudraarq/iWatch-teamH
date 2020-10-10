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
        `https://aqueous-savannah-95860.herokuapp.com/character/${id}`
      );
      const result = await res.data;
      // console.log(result.cast);
      setChars(result);
    };
    getMovies();
  }, [id]);

  const listChar = chars.map((char) => (
    <div key={char.id} className={styles.chars}>
      {char.profile_path === null ? (
        <p className={styles.image}>
          <span>No profile picture</span>
        </p>
      ) : (
        <img
          src={char.Actor.img_url}
          alt={char.Actor.name}
          className={styles.image}
        />
      )}

      <p className={styles.name}>{char.Actor.name}</p>
    </div>
  ));

  return <div className={styles.listContainer}>{listChar}</div>;
};

export default DetailsChar;
