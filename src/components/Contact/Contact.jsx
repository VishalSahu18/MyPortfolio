import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vishalsahu1827@gmail.com">vishalsahu1827@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/vishal-sahu18/">linkedin.com/vishal-sahu18</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/VishalSahu18">github.com/VishalSahu18</a>
        </li>

        <li className={styles.link}>
          <img  className={styles.leetcode} src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/VishalSahu18/">leetcode.com/u/VishalSahu18/</a>
        </li>
      </ul>
    </footer>
  );
};