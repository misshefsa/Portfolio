import React, { useState } from "react";
import styles from "./navbar.module.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import logo from "../Img/logo.svg";
export default function navbar() {
  const [isopen, setisopen] = useState(false);
  return (
    <div>
      <div className={`container ${styles.navbar}`}>
        <div className={`row ${styles.navbarrow}`}>
          <div className={`col ${styles.col } ${styles.sidebar}`}> 
             <div className={` col ${styles.togglebtn}`}>
            <button
              className={`${styles.menubtn}`}
              onClick={() => {
                setisopen(!isopen);
              }}
            >
              <MdOutlineMenuOpen />
            </button>
          </div>
       
</div>
          <div className={`${styles.col}`}>
            <ul className={`${styles.list} ${isopen ? styles.open : ""}`}>   <div className={`${styles.logo}`}>
            <img src={logo} height={25} alt="" />
          </div>
              <li className={styles.title}>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Resume</li>
            </ul>
          </div>

        
        </div>
      </div>
    </div>
  );
}
