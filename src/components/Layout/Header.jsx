import React, { Fragment } from "react";
import mealsImage from "../../assets/images/meals.jpg";
// use of css modules
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <button>Cart</button>
      </header>
      {/* <div className={styles.main_image}>
        <img
          className={styles.main_image.img}
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div> */}
    </Fragment>
  );
};

export default Header;
