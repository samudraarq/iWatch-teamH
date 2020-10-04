import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailsOverview.module.css";

const DetailsOverview = () => {
  const { id } = useParams();
  return (
    <div className={styles.overviewContainer}>
      <h3 className={styles.title}>Synopsis</h3>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        illum illo quaerat veniam! Ad aliquam veritatis nihil exercitationem
        labore magnam commodi eligendi temporibus ipsum, voluptatum molestias
        enim atque consequuntur. Enim? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quas a dolor, magni vitae molestiae, adipisci quis
        animi iure voluptates mollitia saepe eveniet neque inventore accusamus
        labore porro, suscipit possimus expedita. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Praesentium, pariatur ullam mollitia amet
        hic porro nobis aut facere aliquam, iure enim inventore non quisquam
        vero eos, architecto harum vel! Nisi?
      </p>
      <h3 className={styles.title}>Movie Info</h3>
      <ul className={styles.list}>
        <li>Release Date: January 5</li>
        <li>Director: John Doe</li>
        <li>Featured Song: Pegasus Fantasy</li>
        <li>Budget: $200million</li>
      </ul>
    </div>
  );
};

export default DetailsOverview;
