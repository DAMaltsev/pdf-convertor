import React from "react";

import UploadFiles from "../UploadFiles";
import CompressFiles from "../CompressFiles";
import DownloadFiles from "../DownloadFiles";

const DropZoneFiles = ({
  isInUploadState,
  isCompressionState,
  isDownloadState,
  files,
  jobId,
}) => {
  return (
    <>
      {isInUploadState && <UploadFiles />}
      {isCompressionState && <CompressFiles />}
      {isDownloadState && <DownloadFiles jobId={jobId} />}
    </>
  );
};

export default DropZoneFiles;
