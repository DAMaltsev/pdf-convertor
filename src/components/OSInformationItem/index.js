import React from "react";

import CheckTransparent from "../../assets/svg/checkTransparent.svg";

import * as styles from "./styles.module.css";

const osInformationItem = ({ os }) => {
  return (
    <div className={styles.osWrapper}>
      <CheckTransparent />
      <span className={styles.osText}> {os} </span>
    </div>
  );
};

export default osInformationItem;
