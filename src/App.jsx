import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  // function used to show the cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  // function used to hide the cart conditionally
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {/* if the statement is falsy dont render but if the statement is not falsey then render this compeonnent */}
      {cartIsShown && <Cart />}

      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
