import React from "react";
import Rating from "react-rating";

import Star from "../../assets/svg/star.svg";

import FeatureBannerItem from "../FeatureBannerItem";

import * as styles from "./styles.module.css";

const features = [
  { id: 1, name: "Free" },
  { id: 2, name: "Online" },
  { id: 3, name: "No Limits" },
];

const banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.ratingContainer}>
          <Rating
            readonly
            initialRating={5}
            emptySymbol={<Star />}
            fullSymbol={<Star />}
            className={styles.star}
          />
          <span className={styles.votes}> 4,9 (8,381 votes) </span>
        </div>
        <div className={styles.featureContainer}>
          {features.map((feature) => (
            <FeatureBannerItem key={feature.id} feature={feature.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default banner;
