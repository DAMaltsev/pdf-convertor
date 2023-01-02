import React from "react";

import ToolOption from "../ToolOption";

import ArrowRight from "../../assets/svg/arrowRight.svg";

import * as styles from "./styles.module.css";

const ToolOptions = () => {
  return (
    <div className={styles.toolOptionsContainer}>
      <div className={styles.toolOptionsWrapper}>
        <ToolOption />
        <ToolOption />
        <ToolOption />
        <ToolOption />
        <ToolOption />
      </div>

      <div className={styles.seeAllToolsLink}>
        See all tools <ArrowRight className={styles.arrowRight} />
      </div>
    </div>
  );
};

export default ToolOptions;
