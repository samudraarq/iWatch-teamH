import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import styles from "./InputReview.module.css";

const InputReview = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className={styles.reviewContainer}>
      <img
        src="https://picsum.photos/100"
        alt="prof-pic"
        className={styles.img}
      />
      <div className={styles.review}>
        <p className={styles.name}>My name</p>
        <Rating
          name="hover-feedback"
          size="large"
          precision={0.5}
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
        />
        <form className={styles.form}>
          <textarea
            rows="5"
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Input a review"
          />
          <button onClick={handleClick} className={styles.btn}>
            Add a review
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputReview;
