import { Rating } from "@material-ui/lab";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import styles from "./MovieReview.module.css";
import { useParams } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const MovieReview = ({ newReview }) => {
  const [reviews, setReviews] = useState([]);
  // const [hasMoreData, setHasMoreData] = useState(true);

  const { id } = useParams();

  // const generateData = (num) => {
  //   const data = [];
  //   for (let i = 0; i < num; i++) {
  //     const obj = {
  //       name: "Yudi Kaka",
  //       img: "https://picsum.photos/100",
  //       rating: 3.5,
  //       content:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates amet, rem nobis aliquam quisquam debitis molestiae tenetur architecto dolorem voluptas qui quasi eos consectetur at delectus nostrum id itaque?",
  //     };
  //     data.push(obj);
  //   }
  //   return data;
  // };

  useEffect(() => {
    // setReviews(generateData(2));
    axios
      .get(`https://aqueous-savannah-95860.herokuapp.com/review/${id}`)
      .then(function (response) {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [newReview, id]);

  // const fetchMoreData = (e) => {
  //   // e = page from 1
  //   // console.log(e);
  //   const maxPage = 3;
  //   if (e < maxPage) {
  //     const newData = [...reviews, ...generateData(2)];
  //     setTimeout(() => {
  //       setReviews(newData);
  //     }, 2000);
  //   } else {
  //     setHasMoreData(false);
  //   }
  // };

  const movieReviewList = reviews.map((review) => (
    <div className={styles.reviewContainer} key={Math.random()}>
      <Avatar src={review.user_img} alt={review.name} className={styles.img}>
        {review.user_img ? "" : review.user.username[0]}
      </Avatar>
      {/* <img src={review.user_img} alt={review.name} className={styles.img} /> */}
      <div className={styles.review}>
        <p className={styles.name}>{review.user.username}</p>
        <span className={styles.rating}>
          <Rating
            name="review-rating"
            precision={0.5}
            defaultValue={review.user_rating.toString()}
            readOnly
          />
        </span>
        <p className={styles.content}>{review.comment}</p>
      </div>
    </div>
  ));

  return (
    <div>
      {/* <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={fetchMoreData}
        hasMore={hasMoreData}
        loader={
          <div key="0" className={styles.loading}>
            Loading ...
          </div>
        }
      > */}
      {movieReviewList}
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default MovieReview;
