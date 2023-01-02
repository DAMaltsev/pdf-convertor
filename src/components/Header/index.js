import React from "react";

import Logo from "../../assets/svg/logo.svg";

import Nav from "../Nav";
import Banner from "../Banner";

import * as styles from "./styles.module.css";

const header = () => {
  return (
    <>
      <header>
        <div className={styles.wrapper}>

          <Logo />
          <button className={styles.btn} onClick={() => { }}> All PDF Tools </button>
          <Nav></Nav>
        </div>
      </header>
      <Banner />
    </>
  );
};

export default header;
