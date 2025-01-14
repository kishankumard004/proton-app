import React from "react";
import styles from "./header.module.scss";
import { Box } from "@mui/material";
import { HeaderTabs } from "../../Data/Header.constants";
function Header() {
  const getHeader = () => {
    return HeaderTabs.map((tab, index) => {
      return (
        <li className={styles.header__title} key={index} id={tab.id}>
          {tab.tab}
        </li>
      );
    });
  };
  return (
    <>
      <Box className={styles.HeaderLayout}>
        <Box className={styles.menu}>
          <img
            src="/filter-icon.svg"
            alt="Profile"
            width={"50px"}
            className={styles.profileImage}
          />
        </Box>

        <Box className={styles.navItems}>
          <ul className={styles.header__list}>{getHeader()}</ul>
          <img
            src="/profile-icon.svg"
            alt="Profile"
            width={"50px"}
            className={styles.profileImage}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
