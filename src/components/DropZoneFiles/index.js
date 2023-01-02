import React from "react";

import UploadFiles from "../UploadFiles";
import CompressFiles from "../CompressFiles";
import DownloadFiles from "../DownloadFiles";

const DropZoneFiles = ({ isInUploadState, isCompressionState, files }) => {
  return (
    <UploadFiles />
    // <>
    //   {isInUploadState && <UploadFiles />}
    //   {isCompressionState && <CompressFiles />}
    // </>
  );
};

export default DropZoneFiles;
