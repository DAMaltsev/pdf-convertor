import React from "react";

import DropZone from "../DropZone";
import CompressionForm from "../CompressionForm";
import ToolOptions from "../ToolOptions";

import Helper from "../../assets/svg/helper.svg";

import * as styles from "./styles.module.css";

const compressor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.compressorHeader}>
          <article className={styles.compressorArticle}>
            <h3 className={styles.compressorHeading}> Compress PDF </h3>
            <p className={styles.compressorParagraph}>
              PDF compressor to reduce the size of PDF files quickly and easily
            </p>
          </article>
          <Helper className={styles.helper} />
        </div>
        <DropZone />
        <ToolOptions />
        {/* <CompressionForm /> */}
      </div>
    </div>
  );
};

export default compressor;
