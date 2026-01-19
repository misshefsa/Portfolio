import React from 'react'
import styles from './About.module.css'
export default function About() {
  return (

      <div className={`container-fluide ${styles.body}`}>
        <h3 className={`${styles.heading}`}>About</h3>
        <p className={`${styles.p}`}>Passionate Frontend Developer with a strong focus on building responsive, user-friendly, and visually engaging web applications. Skilled in HTML, CSS, JavaScript, React, Bootstrap, with a solid understanding of UI/UX principles and modern development practices.
<br />
 <span className={`${styles.highlights}`}>I Love transforming creative ideas</span>  into functional digital experiences and constantly learning new technologies to stay ahead in the fast-evolving web landscape. Looking to contribute my skills to innovative projects that make an impact.
<br />
<a href="https://www.linkedin.com/in/hefsa-afzaal-033500390" className={`${styles.link}`}>Github</a>
</p>
      </div>
  )
}
