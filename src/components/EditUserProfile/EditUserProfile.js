import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import PublishIcon from "@material-ui/icons/Publish";
import { CircularProgress } from "@material-ui/core";
import { UserContext } from "../Context/UserContext";
import styles from "./EditUserProfile.module.css";

const EditUserProfile = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserFullname, setNewUserFullname] = useState("");
  const [newUserImg, setNewUserImg] = useState(null);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [successUpdate, setSuccessUpdate] = useState(false);

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

    setSuccessUpdate(false);

    const formData = new FormData();
    formData.append("username", newUserName);
    formData.append("email", newUserEmail);
    formData.append("full_name", newUserFullname);
    if (newUserImg) {
      formData.append("user_img", newUserImg, newUserImg.name);
    }

    axios
      .put(
        `https://aqueous-savannah-95860.herokuapp.com/users/edit/${userId}`,
        formData,
        {
          onUploadProgress: (ProgressEvent) => {
            setUploadProgress(
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
            );
          },
        }
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
        setSuccessUpdate(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fileInput = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={newUserImg ? URL.createObjectURL(newUserImg) : userImg}
          alt="user prof pic"
          className={styles.image}
        />
        <PublishIcon
          onClick={() => fileInput.current.click()}
          className={styles.uploadBtn}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          value={newUserName}
          name="username"
          onChange={changeHandler}
          className={styles.input}
          placeholder="Username"
        />
        <label htmlFor="userEmail" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          value={newUserEmail}
          name="userEmail"
          onChange={changeHandler}
          className={styles.input}
          placeholder="Email"
        />
        <label htmlFor="userFullname" className={styles.label}>
          Full Name
        </label>
        <input
          type="text"
          value={newUserFullname}
          name="userFullname"
          onChange={changeHandler}
          className={styles.input}
          placeholder="Full Name"
        />
        <input
          type="file"
          name="profPic"
          onChange={changeHandler}
          style={{ display: "none" }}
          ref={fileInput}
        />
        <button onClick={submitHandler} className={styles.submitBtn}>
          Submit
        </button>
        <CircularProgress
          value={uploadProgress}
          variant="static"
          className={styles.uploadProgress}
        />
        {successUpdate && (
          <span className={styles.success}>Success update profile!</span>
        )}
      </div>
    </div>
  );
};

export default EditUserProfile;
