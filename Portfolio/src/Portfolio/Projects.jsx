import React from "react";
import projecticon from "../Img/projectpart.png";
import project from "../Img/portfolio.png";
import project2 from "../Img/project2.png";
import styles from "./Project.module.css";
export default function Projects() {
  return (
    <>
    <div className={ `container ${styles.box1}`}>
      <div className={ ` ${styles.projectinfo}`}>
        <div>
          <h6 className={`${styles.projecttype}`}>Frontend Projects</h6>
          <h2>KFC Clone</h2>
        </div>
        <div className={`col ${styles.projectdetail}`}>
          A responsive KFC website clone built using modern web technologies.
          This project replicates the core UI, layout, and design of the
          official KFC website with a focus on clean design, responsiveness, and
          user-friendly navigation.
        </div>
        <br />
      </div>
      <div className={` ${styles.project1} ${styles.kfcproject}`}>
        <img src={project} className={`img-fluide ${styles.project}`}  alt="" />
      </div>
      
    </div>
       <div className={ `container ${styles.box2}`}>
      <div className={ ` ${styles.projectinfo}`}>
        <div>
          <h6 className={`${styles.projecttype}`}>Frontend Projects</h6>
          <h2>Portfolio</h2>
        </div>
        <div className={`col ${styles.projectdetail}`}>
          A responsive KFC website clone built using modern web technologies.
          This project replicates the core UI, layout, and design of the
          official KFC website with a focus on clean design, responsiveness, and
          user-friendly navigation.
        </div>
        <br />
      </div>
      <div className={` ${styles.project1}`}>
        <img src={project2} className={`img-fluide ${styles.project}`}   alt="" />
      </div>
      
    </div>
    </>
  );
}
