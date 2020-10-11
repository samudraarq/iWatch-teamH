import React, { useContext } from "react";
import { Rating } from "@material-ui/lab";
import styles from "./InputReview.module.css";
import CheckIcon from "@material-ui/icons/Check";
import { Avatar, Checkbox, LinearProgress } from "@material-ui/core";
import { UserContext } from "../../../Context/UserContext";

const InputReview = ({
  handleChange,
  handleClick,
  setRating,
  rating,
  text,
  isShare,
  setIsShare,
}) => {
  const { username } = useContext(UserContext);

  return (
    <div className={styles.reviewContainer}>
      <Avatar className={styles.img} alt="prof-pic">
        {username[0]}
      </Avatar>
      <div className={styles.review}>
        <p className={styles.name}>{username}</p>
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
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              id="isShare"
              checked={isShare}
              onChange={() => setIsShare(!isShare)}
            />
            <label for="isShare">Share your review so others can see?</label>
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
