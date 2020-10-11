import React, { useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import qs from "qs";
import InputReview from "./InputReview/InputReview";
import MovieReview from "./MovieReview/MovieReview";
import { UserContext } from "../../Context/UserContext";

const DetailsReview = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [newReview, setNewReview] = useState(0);

  const { isLogin, userToken } = useContext(UserContext);

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
    });
    let config = {
      method: "post",
      url: `https://aqueous-savannah-95860.herokuapp.com/review/${id}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        access_token: userToken,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        setText("");
        setRating("");
        setNewReview(newReview + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {isLogin ? (
        <InputReview
          handleClick={handleClick}
          handleChange={handleChange}
          setRating={setRating}
          rating={rating}
          text={text}
        />
      ) : (
        <p>User not login</p>
      )}

      <MovieReview newReview={newReview} />
    </div>
  );
};

export default DetailsReview;
