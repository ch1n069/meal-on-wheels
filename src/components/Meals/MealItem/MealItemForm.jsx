import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <div className={styles.form}>
      <form>
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className={styles.button}>add to cart</button>
      </form>
    </div>
  );
};

export default MealItemForm;
