import React from "react";

import UploadFilesIcon from "../../assets/svg/uploadFiles.svg";
import ArrowDownPointer from "../../assets/svg/arrowDownPointer.svg";

import DropBox from "../../assets/png/dropbox.png";
import GoogleDrive from "../../assets/png/googleDrive.png";

import * as styles from "./styles.module.css";
import { motion } from 'framer-motion'

const UploadFiles = () => {

  return (
    <motion.div className={styles.filesContainer}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}>
      <div className={styles.uploadFilesWrapper}>
        <UploadFilesIcon />
        <button className={styles.uploadFilesButton}>
          <div className={styles.uploadFilesTextContainer}>Upload files</div>
          <ArrowDownPointer />
        </button>
        <span className={styles.uploadFilesDescription}>
          or drag and drop files he
          re
        </span>
        <div className={styles.cloudProvidersContainer}>
          <img className={styles.cloudProvider} src={DropBox} alt="drop box" />
          <img
            className={styles.cloudProvider}
            src={GoogleDrive}
            alt="google drive"
          />
        </div>
      </div>
    </motion.div >
  );
};

export default UploadFiles;
