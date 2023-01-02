import React from "react";
import ReactSlider from "react-slider";
import Switch from "react-switch";

import * as styles from "./styles.module.css";

const CompressionForm = () => {
  const switchToggleHandler = () => {
    return;
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.qualitySliderContainer}>
            <div className={styles.qualitySliderHeadingWrapper}>
              <h6 className={styles.qualitySliderHeading}>
                Level of compression
              </h6>
            </div>

            <div className={styles.qualitySliderWrapper}>
              <label className={styles.sliderDescription}>
                Small size <br /> Low quality
              </label>

              <ReactSlider
                className={styles.qualitySlider}
                marks
                min={1}
                max={8}
                defaultValue={0}
                thumbClassName={styles.qualitySliderThumb}
                markClassName={styles.qualitySliderMark}
                trackClassName={styles.qualitySliderTrack}
                renderMark={(props) => (
                  <div className={styles.qualitySliderMark} {...props} />
                )}
                renderTrack={(props, state) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      background: state.index === 1 ? "#E7E0EC" : "#6750A4",
                    }}
                  ></div>
                )}
              />

              <label className={styles.sliderDescription}>
                Big size <br /> High quality
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.compressionSettingsContainer}>
        <span className={styles.compressionSettingsHeading}>
          Compression Settings
        </span>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonWrapper}>
            <span className={styles.compressionSettingsLabel}>DPI</span>
            <input
              className={styles.numberInputs}
              type="number"
              id="quantity"
              min="1"
              max="100"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <span className={styles.compressionSettingsLabel}>
              Image quality
            </span>
            <input
              className={styles.numberInputs}
              type="number"
              id="quantity"
              min="1"
              max="100"
              value={2}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <span className={styles.switchValueIndicators}> Color </span>
            <Switch
              className={styles.inputSwitch}
              checked={true}
              onColor="#E7E0EC"
              offColor="#E7E0EC"
              onHandleColor="#49454F"
              offHandleColor="#49454F"
              activeBoxShadow="0 0 0 3px rgba(28, 27, 31, 0.12)"
              handleDiameter={28}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={switchToggleHandler}
            />
            <span className={styles.switchValueIndicators}> Gray </span>
          </div>
        </div>
      </div>
      <button className={styles.compressionButton}>Compress</button>
    </>
  );
};

export default CompressionForm;
