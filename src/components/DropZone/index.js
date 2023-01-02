import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import DropzoneList from "../DropZoneList";
import DropZoneFiles from "../DropZoneFiles";

import * as styles from "./styles.module.css";

export const dropStates = {
  UPLOAD: "UPLOAD",
  CHOOSE_COMPRESSION: "CHOOSE_COMPRESSION",
  DOWNLOAD: "DOWNLOAD",
};

const DropZone = () => {
  const [dropState, setDropState] = useState(dropStates.UPLOAD);
  const [pdfs, setPdfs] = useState([]);

  const dropHandler = (files) => {
    setDropState(dropStates.CHOOSE_COMPRESSION);
    setPdfs([...pdfs, files]);
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDropAccepted: dropHandler,
  });

  return (
    <>
      {console.log(pdfs)}
      <div {...getRootProps({ className: styles.dropZone })}>
        <input className="input-zone" {...getInputProps()} />

        <DropzoneList dropState={dropState} />
        <DropZoneFiles
          isInUploadState={dropState === dropStates.UPLOAD}
          isCompressionState={dropState === dropStates.CHOOSE_COMPRESSION}
          files={pdfs}
        />
      </div>
    </>
  );
};

export default DropZone;
