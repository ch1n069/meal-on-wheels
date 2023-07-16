import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={styles.cart}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
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
    </Modal>
  );
};

export default Cart;
