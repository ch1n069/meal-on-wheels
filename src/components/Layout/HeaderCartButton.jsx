import React from "react";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button type="submit" className={styles.button}>
      <span className={styles.icon}></span>
      <span>Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
