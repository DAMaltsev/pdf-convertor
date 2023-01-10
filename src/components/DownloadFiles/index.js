import React from "react";

import axios from "axios";

import DownloadIcon from "../../assets/svg/download.svg";
import TrashRed from "../../assets/svg/trashRed.svg";
import Restart from "../../assets/svg/restart.svg";

import * as styles from "./styles.module.css";

const DownloadFiles = ({ jobId }) => {
  const downloadHandler = () => {
    const downloadButton = document.createElement("a");
    downloadButton.href = `https://filetools13.pdf24.org/client.php?mode=download&action=downloadJobResult&jobId=${jobId}`;
    downloadButton.target = "_blank";
    downloadButton.download = true;
    downloadButton.click();
  };
  return (
    <div className={styles.downloadFilesContainer}>
      <div className={styles.downloadFilesWrapper}>
        <DownloadIcon className={styles.downloadIcon} />
        <span className={styles.filesReadyText}>Your files are ready</span>
        <ul className={styles.fileNamesList}>
          <li className={styles.fileName}>New Document1.pdf</li>
          <li className={styles.fileName}>New Document1.pdf</li>
        </ul>
        <div className={styles.buttonsContainer}>
          <button className={styles.downloadButton} onClick={downloadHandler}>
            Download
          </button>
          <button className={styles.previewButton}>Preview</button>
          <button className={styles.continueButton}>
            Continue in another tool
          </button>
        </div>
        <div className={styles.controlButtonsContainer}>
          <button className={styles.controlButtonDelete}>
            <TrashRed />
            <span className={styles.controlButtonText}> Delete </span>
          </button>
          <button className={styles.controlButtonRestart}>
            <Restart />
            <span className={styles.controlButtonText}> Restart </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadFiles;
