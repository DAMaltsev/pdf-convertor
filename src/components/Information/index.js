import React from "react";

import Compress from "../../assets/svg/compress.svg";
import Adjust from "../../assets/svg/adjust.svg";
import BlueStar from "../../assets/svg/blueStar.svg";
import Computer from "../../assets/svg/computer.svg";
import Cloud from "../../assets/svg/cloud.svg";
import Lock from "../../assets/svg/lock.svg";

import OSInformationItem from "../OSInformationItem";

import * as styles from "./styles.module.css";

const operatingSystems = [
  { id: 1, name: "Windows" },
  { id: 2, name: "Linux" },
  { id: 3, name: "MAC" },
  { id: 4, name: "iPhone" },
  { id: 5, name: "Android" },
];

const informations = [
  {
    id: 1,
    title: "How to compress PDF files",
    icon: <Compress />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
  {
    id: 2,
    title: "Adjustable quality",
    icon: <Adjust />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
  {
    id: 3,
    title: "Easy to use",
    icon: <BlueStar />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
  {
    id: 4,
    title: "Runs on your system",
    icon: <Computer />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
  {
    id: 5,
    title: "No installation required",
    icon: <Cloud />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
  {
    id: 6,
    title: "Secure online compression",
    icon: <Lock />,
    description:
      "Select your PDF files which you would like to compress or drop them into the file box and start the compression. A few seconds later you can download your compressed PDF files.",
  },
];

const information = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.informationHeading}> Information </h2>

      <div className={styles.osContainer}>
        {operatingSystems.map((os) => (
          <OSInformationItem key={os.id} os={os.name} />
        ))}
      </div>

      <div className={styles.informationWrapper}>
        {informations.map((information) => {
          return (
            <div className={styles.informationBox}>
              <div className={styles.informationBoxHeader}>
                <h3 className={styles.informationTitle}>{information.title}</h3>
                <div>{information.icon}</div>
              </div>
              <p className={styles.informationText}>
                {information.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default information;
