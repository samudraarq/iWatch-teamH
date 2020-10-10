import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import styles from "./InputReview.module.css";
import CheckIcon from "@material-ui/icons/Check";
import { useParams } from "react-router-dom";
import qs from "qs";

const InputReview = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = qs.stringify({
      user_rating: rating,
      comment: text,
      date_of_comment: new Date(),
      share: true,
      userId: 4,
    });
    let config = {
      method: "post",
      url: `https://aqueous-savannah-95860.herokuapp.com/review/${id}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setText("");
        setRating("");
      })
      .catch(function (error) {
        console.log(error);
      });
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
            // console.log(newValue);
            setRating(newValue);
            // console.log(event);
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
