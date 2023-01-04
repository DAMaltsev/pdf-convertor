import React from "react";

import MagnifyingGlass from "../../assets/svg/magnifyingGlass.svg";
import Trash from "../../assets/svg/trash.svg";

import * as styles from "./styles.module.css";

const File = ({ uploadedPdfs, setUploaded }) => {

  return (
    <div className={styles.file}>
      <div className={styles.fileInnerWrapper}>
        <div className={styles.buttonsContainer}>
          <MagnifyingGlass className={styles.magnifyingGlass} />
          <Trash className={styles.trash} />
        </div>
        <div className={styles.filePreview}></div>
        <div className={styles.fileNameContainer}>
          <span className={styles.fileName}>New Doc.....pdf (80 KB)</span>
        </div>
      </div>
    </div>
  );
};

export default File;
