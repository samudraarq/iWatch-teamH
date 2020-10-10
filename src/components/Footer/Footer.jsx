import React from "react";
import LogoMilan from "../LogoMilan/LogoMilan";
import styles from "./Footer.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import playStoreLogo from "./google-play-badge.png";
import AppStoreLogo from "./Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoAndDesc}>
          <LogoMilan />
          <p>
            Google Play and the Google Play logo are trademarks of Google LLC.
            App Store® and App Store® logo are trademarks of Apple Inc.,
            registered in the U.S. and other countries.
          </p>
        </div>
        <div className={styles.navFooter}>
          <ul>
            <li>Tentang Kami</li>
            <li>Blog</li>
            <li>Layanan</li>
            <li>Karir</li>
            <li>Pusat Media</li>
            <Link to="/movie/add">Tambah Movie</Link>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h3>Download</h3>
          <div className={styles.downloadOption}>
            <img src={playStoreLogo} alt="Play Store Logo"></img>
            <img src={AppStoreLogo} alt="App Store Logo"></img>
          </div>
          <h3>Social Media</h3>
          <div className={styles.downloadSocmed}>
            <TwitterIcon className={styles.socmedIcon} />
            <FacebookIcon className={styles.socmedIcon} />
            <LinkedInIcon className={styles.socmedIcon} />
          </div>
        </div>
      </div>
      <span className={styles.copyright}>
        Copyright © 2020 iWatch. All Rights Reserved.
      </span>
    </div>
  );
};
export default Footer;
