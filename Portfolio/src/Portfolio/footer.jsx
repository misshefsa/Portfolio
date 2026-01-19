import React from "react";
import styles from "../Portfolio/footer.module.css";
import logo from "../Img/logo.svg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footer}`}>
      <div className="container">
        <div className={`row ${styles.row}`}>

          {/* Logo */}
          <div className={`col-md-3 ${styles.col}`}>
            <img src={logo} alt="logo" height={30} />
          </div>

          {/* Skills */}
          <div className="col-md-3 col-sm-4">
            <ul className={styles.list}>
              <li className={styles.title}>Skills</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

      

          {/* About + Social */}
          <div className="col-md-3 col-sm-4">
            <ul className={styles.list}>
              <li className={styles.title}>About</li>
              <li>About Me</li>
              <li>Contact</li>
              <li>Resume</li>
            </ul>
</div>
            <div className={`${styles.social} col-md-3 col-sm-4`}>
              <FaFacebook className={styles.icon} />
              <FaGithub className={styles.icon} />
              <FaLinkedin className={styles.icon} />
            </div>
          </div>
            <div className={`${styles.social} col-12`}>
                <p className={`${styles.email}`}>
        ©  2023 Hefsa. All rights reserved.
      </p>
          </div>
</div>
      </div>
   
  );
}
