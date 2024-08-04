import React from "react";
import styles from "./Tools.module.css";
import tools from "../../data/tools.json";
import { getImageUrl } from "../../utils";

const Tools = () => {
  return (
    <section className={styles.container} id="tools">
      <div className={styles.content}>
        <h4 className={styles.title}>Development Tools</h4>
        <div className={styles.tools}>
          {tools.map((tool, id) => {
            return (
              <div key={id} className={styles.tool}>
                <div className={styles.toolImageContainer}>
                  <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
                </div>
                <p>{tool.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
