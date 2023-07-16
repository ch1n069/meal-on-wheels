import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
