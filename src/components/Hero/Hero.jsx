import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishal</h1>
        <p className={styles.description}>
          I'm a tech enthusiast and passionate software engineer with almost 2 years
          of professional experience in both backend and frontend development.
          Possess a strong command of Data Structures and Algorithms, along with
          hands-on experience in modern programming languages such as
          C/C++,Java, JavaScript. Skilled in developing robust applications
          using frameworks like Spring Boot, React.js, and Tailwind CSS. In a
          span of 2 years I have successfully contributed to the development of
          various Java Service and inhouse software products, working
          extensively with Java, Spring Boot, React.js, JavaScript, Material-UI,
          and Camunda. Additionally, I have built personal projects leveraging
          technologies like Node.js, Express.js, React.js, and MongoDB,
          showcasing my versatility and commitment to continuous learning.
        </p>
        <a href="mailto:vishalsahu1827@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
