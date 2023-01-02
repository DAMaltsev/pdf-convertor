import React from "react";

import CheckWhite from "../../assets/svg/CheckWhite.svg";

import * as styles from "./styles.module.css";

const featureBannerItem = ({ feature }) => {
  return (
    <div className={styles.featureWrapper}>
      <CheckWhite />
      <span className={styles.feature}> {feature} </span>
    </div>
  );
};

export default featureBannerItem;
