import React from "react";
import styles from "./NotLoginBox.module.css";

const NotLoginBox = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Please Sign up or Login to give a review!</p>
    </div>
  );
};

export default NotLoginBox;
