import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from 'axios'

import DropzoneList from "../DropZoneList";
import DropZoneFiles from "../DropZoneFiles";

import * as styles from "./styles.module.css";


// export const dropStates = {
//   UPLOAD: "UPLOAD",
//   CHOOSE_COMPRESSION: "CHOOSE_COMPRESSION",
//   DOWNLOAD: "DOWNLOAD",
// };

const DropZone = ({ dropStates, dropState, setDropState, uploadedPdfs, setUploaded }) => {

  const [pdfs, setPdfs] = useState([]);

  const dropHandler = async (files) => {
    setPdfs([...pdfs, files]);

    const data = new FormData()
    data.append('file', files[0])

    await axios.post('https://filetools13.pdf24.org/client.php?action=upload', data)
      .then((res) => {
        setUploaded(res.data)
        console.log(res)
      })
      .catch((err) => console.log(err))

    setDropState(dropStates.CHOOSE_COMPRESSION);
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDropAccepted: dropHandler,
  });

  return (
    <>
      {console.log(pdfs)}
      <div {...getRootProps({ className: styles.dropZone })}>
        <input type='file' className="input-zone" {...getInputProps()} />

        <DropzoneList dropState={dropState} />
        <DropZoneFiles
          isInUploadState={dropState === dropStates.UPLOAD}
          isCompressionState={dropState === dropStates.CHOOSE_COMPRESSION}
          isDownloadState={dropState === dropStates.DOWNLOAD}
          files={pdfs}
        />
      </div>
    </>
  )
}

export default DropZone;
