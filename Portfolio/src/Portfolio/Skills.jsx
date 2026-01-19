import React from "react";
import styles from "./Skills.module.css";
import skill1 from "../Img/skill1.png";
import skill2 from "../Img/skill2.png";
import skill3 from "../Img/skill3.png";
import skill4 from "../Img/skill4.png";
import skill5 from "../Img/skill5.png";
import skill6 from "../Img/skill6.png";
import skill7 from "../Img/skill7.png";
import skill8 from "../Img/skill8.png";
import skill9 from "../Img/skill9.png";
import skill10 from "../Img/skill10.png";

const skillsData = [
  { id: 1, image: skill1, alt: "Skill 1", title:"Figma" ,p:'Level: Intermediate  What I do Design modern UI/UX layouts, wireframes, and prototypes for web and mobile apps.'},
 { id: 2, image: skill2, alt: "Skill 2", title:"CSS" ,p:'Level: Advanced What I do:  Build responsive layouts, animations, and modern UI designs.'},
  { id: 3, image: skill3, alt: "Skill 3", title:"Javascript" ,p:'Level: Intermediate What I do: Add interactivity, DOM manipulation, and dynamic functionality to websites.'},
  { id: 4, image: skill4, alt: "Skill 4", title:"React" ,p:'Level: Intermediate What I do:  Develop reusable components and responsive single-page applications.'},
   { id: 5, image: skill5, alt: "Skill 5", title:"HTML" ,p:'Level: Advanced What I do:  Create clean, semantic, and SEO-friendly website structures.'},
     { id: 6, image: skill6, alt: "Skill 6", title:"HTML" ,p:'Level: Advanced What I do: Create fast, mobile-first, and responsive designs using grid systems.'},
          { id: 7, image: skill7, alt: "Skill 7", title:"Photshop" ,p:'Level: Intermediate What I do:  Edit images, design web assets, and optimize visuals for UI.'}, 
          { id: 8, image: skill8, alt: "Skill 8", title:"Tailwind" ,p:'Level: Intermediate What I do:  Build modern, clean, and customizable UI using utility-first CSS.'},  
          { id: 9, image: skill9, alt: "Skill 9", title:"Canva" ,p:'Level: Intermediate What I do:  Design social media posts, banners, and simple marketing graphics.'},
             { id: 10, image: skill10, alt: "Skill 10", title:"Canva" ,p:'Level: Beginner What I do: Store and manage application data with NoSQL databases.'}
]

export default function Skills() {
  return (
    <div className={`container ${styles.body}`}>
      <h3 className={styles.heading}>Skills</h3>

      <div className="row">
        {skillsData.map((skill) => (
          <div key={skill.id} className="col-lg-6 col-12">
            <div className={styles.skillBox}>
              <div>
              <img
                src={skill.image}
                className={styles.img}
                alt={skill.alt}
              />
              </div>
              <div>
              <h3>{skill.title}</h3>
              <p>{skill.p}</p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
