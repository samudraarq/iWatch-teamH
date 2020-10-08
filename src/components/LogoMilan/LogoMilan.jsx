import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoMilan.module.css";
import icon from "./iWatch_logo.png";

const LogoMilan = ({ color }) => {
  return (
    <Link to="/all" className={styles.link}>
      <div className={styles.logoContainer}>
        <img src={icon} alt="Logo iWatch" />
        <h3 style={{ color: color }}>iWatch</h3>
      </div>
    </Link>
  );
};
export default LogoMilan;
