import React from "react";

import Helper from "../../assets/svg/helper.svg";
import WhiteStar from "../../assets/svg/whiteStar.svg";

import * as styles from "./styles.module.css";

const ToolOption = () => {
  return (
    <div className={styles.toolOption}>
      <Helper />
      <span className={styles.toolOptionText}>Extract PDF images</span>
      <WhiteStar className={styles.whiteStar} />
    </div>
  );
};

export default ToolOption;
