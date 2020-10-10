import React from "react";
import { Rating } from "@material-ui/lab";
import styles from "./InputReview.module.css";
import CheckIcon from "@material-ui/icons/Check";
import { LinearProgress } from "@material-ui/core";

const InputReview = ({
  handleChange,
  handleClick,
  setRating,
  rating,
  text,
}) => {
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
          value={rating}
          onChange={(event, newValue) => {
            // console.log(newValue);
            setRating(newValue);
            // console.log(event);
          }}
        />
        <form className={styles.form}>
          <div className={styles.textareaContainer}>
            <textarea
              rows="2"
              onChange={handleChange}
              className={styles.textarea}
              placeholder="Input a review (max 250 characters)"
              value={text}
              maxLength="250"
            />
            <LinearProgress
              value={(text.length / 250) * 100}
              variant="determinate"
              className={styles.progress}
            />
          </div>
          <button onClick={handleClick} className={styles.btn}>
            <div className={styles.textContainer}>
              <CheckIcon className={styles.icon} />
              <span>Add Review</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputReview;
