import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Meals on wheel</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
