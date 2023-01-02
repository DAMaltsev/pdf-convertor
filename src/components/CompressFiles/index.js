import React from "react";

import File from "../File/index";

import * as styles from "./styles.module.css";

const CompressFiles = () => {
  return (
    <div className={styles.compressFilesContainer}>
      <div className={styles.compressFilesWrapper}>
        <File />
        <File />
        <File />
      </div>
    </div>
  );
};

export default CompressFiles;
