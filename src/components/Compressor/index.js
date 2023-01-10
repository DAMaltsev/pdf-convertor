import React, { useState } from "react";

import DropZone from "../DropZone";
import CompressionForm from "../CompressionForm";
import ToolOptions from "../ToolOptions";

import Helper from "../../assets/svg/helper.svg";

import * as styles from "./styles.module.css";

const Compressor = () => {
  const dropStates = {
    UPLOAD: "UPLOAD",
    CHOOSE_COMPRESSION: "CHOOSE_COMPRESSION",
    DOWNLOAD: "DOWNLOAD",
  };

  const [dropState, setDropState] = useState(dropStates.UPLOAD);
  const [uploadedPdfs, setUploaded] = useState(null);
  const [jobId, setJobId] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.compressorHeader}>
          <article className={styles.compressorArticle}>
            <h3 className={styles.compressorHeading}> Compress PDF</h3>
            <p className={styles.compressorParagraph}>
              PDF compressor to reduce the size of PDF files quickly and easily
            </p>
          </article>
          <Helper className={styles.helper} />
        </div>
        <DropZone
          dropStates={dropStates}
          dropState={dropState}
          setDropState={setDropState}
          uploadedPdfs={uploadedPdfs}
          setUploaded={setUploaded}
          jobId={jobId}
        />
        {uploadedPdfs !== null && dropState === dropStates.CHOOSE_COMPRESSION && (
          <CompressionForm
            dropStates={dropStates}
            dropState={dropState}
            setDropState={setDropState}
            setJobId={setJobId}
            jobId={jobId}
            uploadedPdfs={uploadedPdfs}
          />
        )}
        <ToolOptions />
      </div>
    </div>
  );
};

export default Compressor;
