import React from "react";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles.}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} type="">
          Close
        </button>
        <button className={styles.button} type="">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
