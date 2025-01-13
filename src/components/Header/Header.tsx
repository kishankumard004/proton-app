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
        
        <Box className={styles.navItems}>
          {getHeader()}
          <img
            src="/profile-icon.svg"
            alt="Profile"
            width={"40px"}
            className={styles.profileImage}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
