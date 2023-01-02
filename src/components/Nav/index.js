import React, { useContext } from "react";
import { Link } from "gatsby";

import Moon from "../../assets/svg/moon.svg";
import Arrow1 from "../../assets/svg/arrow1.svg";

import ThemeContext from "../../context/theme-context";

import * as styles from "./styles.module.css";

const Nav = () => {
  const ctx = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <nav>
        <Arrow1 className={styles.headerArrow} />
        <Link className={styles.link} to="*">
          Desktop Version
        </Link>
        <Link className={styles.link} to="*">
          Contact
        </Link>
        <button className={styles.moonButton} onClick={ctx.toggleTheme}>
          <Moon className={styles.moonIcon} />
        </button>
      </nav>
      <button onClick={() => {}}> All PDF Tools </button>
    </div>
  );
};

export default Nav;
