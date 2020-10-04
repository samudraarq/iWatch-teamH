import { Rating } from "@material-ui/lab";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styles from "./MovieReview.module.css";

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(true);

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
    setReviews(generateData(2));
  }, []);

  const fetchMoreData = (e) => {
    // e = page from 1
    console.log(e);
    const maxPage = 3;
    if (e < maxPage) {
      const newData = [...reviews, ...generateData(2)];
      setTimeout(() => {
        setReviews(newData);
      }, 2000);
    } else {
      setHasMoreData(false);
    }
  };

  const movieReviewList = reviews.map((review) => (
    <div className={styles.reviewContainer} key={Math.random()}>
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

  return (
    <div>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={fetchMoreData}
        hasMore={hasMoreData}
        loader={
          <div key="0" className={styles.loading}>
            Loading ...
          </div>
        }
      >
        {movieReviewList}
      </InfiniteScroll>
    </div>
  );
};

export default MovieReview;
