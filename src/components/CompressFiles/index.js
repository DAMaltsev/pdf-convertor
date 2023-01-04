import React from "react";

import File from "../File/index";

import * as styles from "./styles.module.css";

const CompressFiles = ({ pdfs, setPdfs }) => {
  return (
    <div className={styles.compressFilesContainer}>
      <div className={styles.compressFilesWrapper}>
        <File />
      </div>
    </div>
  );
};

export default CompressFiles;
