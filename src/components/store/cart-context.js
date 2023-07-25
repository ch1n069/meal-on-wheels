import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  //   receives an item that should be added in the cart
  addItem: (item) => {},
  //   removes an item based on the id of the item
  removeItem: (id) => {},
});

export default cartContext;
