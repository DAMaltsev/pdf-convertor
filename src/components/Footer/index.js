import React from "react";
import { Link } from "gatsby";

import * as styles from "./styles.module.css";

const footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerWrapper}>
          <h5 className={styles.footerHeading}>All tools</h5>

          <div className={styles.navWrapper}>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Merge PDF</Link>
              <Link className={styles.navItem}>Split PDF</Link>
              <Link className={styles.navItem}>Compress PDF</Link>
              <Link className={styles.navItem}>Edit PDF</Link>
              <Link className={styles.navItem}>Sign PDF</Link>
              <Link className={styles.navItem}>PDF Convertor</Link>
              <Link className={styles.navItem}>Convert to PDF</Link>
            </div>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Images to PDF</Link>
              <Link className={styles.navItem}>PDF to Images</Link>
              <Link className={styles.navItem}>Extract PDF Images</Link>
              <Link className={styles.navItem}>Protect PDF</Link>
              <Link className={styles.navItem}>Unlock PDF</Link>
              <Link className={styles.navItem}>Rotate PDF pages</Link>
              <Link className={styles.navItem}>Remove PDF pages</Link>
            </div>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Extract PDF pages</Link>
              <Link className={styles.navItem}>Sort PDF pages</Link>
              <Link className={styles.navItem}>Webpage to PDF</Link>
              <Link className={styles.navItem}>Create PDF job application</Link>
              <Link className={styles.navItem}>Create PDF with camera</Link>
              <Link className={styles.navItem}>PDF OCR</Link>
              <Link className={styles.navItem}>Add Water mark</Link>
            </div>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Add page numbers</Link>
              <Link className={styles.navItem}>View as PDF</Link>
              <Link className={styles.navItem}>PDF Overlay</Link>
              <Link className={styles.navItem}>Compare PDFs</Link>
              <Link className={styles.navItem}>Web optimize PDF</Link>
              <Link className={styles.navItem}>Annotate PDF </Link>
              <Link className={styles.navItem}>Redact PDF</Link>
            </div>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Create PDF</Link>
              <Link className={styles.navItem}>PDF 24 Creator</Link>
              <Link className={styles.navItem}>PDF Printer</Link>
              <Link className={styles.navItem}>PDF Reader</Link>
              <Link className={styles.navItem}>Create invoice</Link>
              <Link className={styles.navItem}>Remove PDF metadata</Link>
              <Link className={styles.navItem}>Flatten PDF</Link>
            </div>
            <div className={styles.footerNav}>
              <Link className={styles.navItem}>Crop PDF</Link>
            </div>
          </div>

          <div className={styles.legalLinksContainer}>
            <Link className={styles.legalLink}>About us</Link>
            <Link className={styles.legalLink}>Help</Link>
            <Link className={styles.legalLink}>Contact</Link>
          </div>

          <div className={styles.legalLinksContainer}>
            <Link className={styles.legalLink}>Legal Notice</Link>
            <Link className={styles.legalLink}>Terms of use</Link>
            <Link className={styles.legalLink}>Privacy Policy</Link>
            <Link className={styles.legalLink}>Privacy Settings</Link>
          </div>
        </div>
      </footer>

      <div className={styles.footerBanner}>
        © 2022 Geek Software GmbH — WE love PDF
      </div>
    </>
  );
};

export default footer;
