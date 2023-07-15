import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MealsSummary />
    </>
  );
}

export default App;
