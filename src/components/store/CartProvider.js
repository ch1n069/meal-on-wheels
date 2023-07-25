import cartContext from "./cart-context";
const cartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};

  //   this will be passed down as the value that is suppossed to be accessed
  // by other components that need the properties that are in context
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default cartProvider;
