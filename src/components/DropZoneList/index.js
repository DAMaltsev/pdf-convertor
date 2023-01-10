import React from "react";

import * as styles from "./styles.module.css";

const DropZoneList = ({
  dropStates,
  dropState,
  setDropState,
  step,
  setStep, }) => {
  return (
    <ul>
      <li>
        {
          dropState === dropStates.UPLOAD &&
          <div className={styles.listItemContainer}>1. Upload your PDFs</div>
        }
      </li>
      <li>
        {
          dropState === dropStates.CHOOSE_COMPRESSION &&
          <div className={styles.listItemContainer}>2. Choose compression</div>
        }
      </li>
      <li>
        {
          dropState === dropStates.DOWNLOAD &&
          < div className={styles.listItemContainer}>3. Done</div>
        }
      </li>
    </ul >
  );
};

export default DropZoneList;
