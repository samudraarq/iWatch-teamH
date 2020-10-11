import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import styles from "./EditUserProfile.module.css";

const EditUserProfile = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserFullname, setNewUserFullname] = useState("");

  const [newUserImg, setNewUserImg] = useState(null);

  const {
    userId,
    username,
    userEmail,
    userFullname,
    userImg,
    setUsername,
    setUserEmail,
    setUserFullname,
    setUserImg,
  } = useContext(UserContext);

  useEffect(() => {
    setNewUserName(username);
    setNewUserEmail(userEmail);
    setNewUserFullname(userFullname);
  }, [username, userEmail, userFullname]);

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setNewUserName(e.target.value);
        break;
      case "userEmail":
        setNewUserEmail(e.target.value);
        break;
      case "userFullname":
        setNewUserFullname(e.target.value);
        break;
      case "profPic":
        setNewUserImg(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", newUserName);
    formData.append("email", newUserEmail);
    formData.append("full_name", newUserFullname);
    formData.append("user_img", newUserImg, newUserImg.name);

    axios
      .put(
        `https://aqueous-savannah-95860.herokuapp.com/users/edit/${userId}`,
        formData
      )
      .then((res) => {
        console.log(res);
        setUserEmail(res.data.email);
        setUsername(res.data.username);
        setUserFullname(res.data.full_name);
        setUserImg(res.data.image);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("image", res.data.image);
        localStorage.setItem("full_name", res.data.full_name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <img src={userImg} alt="user prof pic" />
      <input
        type="text"
        value={newUserName}
        name="username"
        onChange={changeHandler}
      />
      <input
        type="text"
        value={newUserEmail}
        name="userEmail"
        onChange={changeHandler}
      />
      <input
        type="text"
        value={newUserFullname}
        name="userFullname"
        onChange={changeHandler}
      />
      <input type="file" name="profPic" onChange={changeHandler} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default EditUserProfile;
