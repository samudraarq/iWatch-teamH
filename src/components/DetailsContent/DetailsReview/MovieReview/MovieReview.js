import { Rating } from "@material-ui/lab";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./MovieReview.module.css";

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);

  const generateData = (num) => {
    const data = [];
    for (let i = 0; i < num; i++) {
      const obj = {
        name: "Yudi Kaka",
        img: "https://picsum.photos/100",
        rating: 3.5,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates amet, rem nobis aliquam quisquam debitis molestiae tenetur architecto dolorem voluptas qui quasi eos consectetur at delectus nostrum id itaque?",
      };
      data.push(obj);
    }
    return data;
  };

  useEffect(() => {
    setReviews(generateData(20));
  });

  const movieReviewList = reviews.map((review, idx) => (
    <div className={styles.reviewContainer} key={idx}>
      <img src={review.img} alt="profile picture" />
      <div className={styles.review}>
        <p className={styles.name}>{review.name}</p>
        <span className={styles.rating}>
          <Rating
            name="review-rating"
            precision={0.5}
            defaultValue={review.rating}
            readOnly
          />
        </span>
        <p className={styles.content}>{review.content}</p>
      </div>
    </div>
  ));

  return <div>{movieReviewList}</div>;
};

export default MovieReview;
