import React from "react";

import Accordion from "../Accordion";

import * as styles from "./styles.module.css";

const faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Accordion />
      </div>
    </div>
  );
};

export default faq;
