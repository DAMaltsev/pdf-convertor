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
          <Nav></Nav>
        </div>
      </header>
      <Banner />
    </>
  );
};

export default header;
