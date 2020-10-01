import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailsChar.module.css";

const DetailsChar = () => {
  const [chars, setChars] = useState([
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
    {
      name: "Samud",
      img: "https://picsum.photos/200/300",
    },
  ]);

  const { id } = useParams();

  const listChar = chars.map((char, idx) => (
    <div key={idx} className={styles.chars}>
      <img src={char.img} alt={char.name} className={styles.image} />
      <p className={styles.name}>{char.name}</p>
    </div>
  ));

  return <div className={styles.listContainer}>{listChar}</div>;
};

export default DetailsChar;
