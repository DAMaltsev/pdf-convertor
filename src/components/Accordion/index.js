import React, { useState } from "react";

import ArrowDown from "../../assets/svg/arrowDown.svg";

import * as styles from "./styles.module.css";

const Accordion = (props) => {

  return (
    <details className={styles.accordion}>
      <summary className={styles.titleWrapper}>
        <h5 className={styles.accordionHeading}>FAQ</h5>
        <div className={styles.toggleIcon}>
          <ArrowDown />
        </div>
      </summary>
      <div className={styles.contentContainer}>
        <p className={styles.accordionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </details>
  );
};

export default Accordion;
