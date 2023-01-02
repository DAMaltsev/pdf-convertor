import React from "react";

import ArrowDown from "../../assets/svg/arrowDown.svg";

import * as styles from "./styles.module.css";

const accordion = (props) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.titleWrapper}>
        <h5 className={styles.accordionHeading}>FAQ</h5>
        <div className={styles.toggleIcon}>
          <ArrowDown />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.accordionContent}></p>
      </div>
    </div>
  );
};

export default accordion;
