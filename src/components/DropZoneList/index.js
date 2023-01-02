import React from "react";

import * as styles from "./styles.module.css";

const DropZoneList = () => {
  return (
    <ul>
      <li>
        <div className={styles.listItemContainer}>1. Upload your PDFs</div>
      </li>
      <li>
        <div className={styles.listItemContainer}>2. Choose compression</div>
      </li>
      <li>
        <div className={styles.listItemContainer}>3. Done</div>
      </li>
    </ul>
  );
};

export default DropZoneList;
