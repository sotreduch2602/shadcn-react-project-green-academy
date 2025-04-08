import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, numQuantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product_id === productToAdd.product_id
  );

  if (existingCartItem) {
    console.log("existingCartItem", existingCartItem);

    return cartItems.map((cartItem) =>
      cartItem.product_id === productToAdd.product_id
        ? { ...cartItem, quantity: cartItem.quantity + numQuantity }
        : cartItem
    );
  }
  console.log("Not existingCartItem");

  return [...cartItems, { ...productToAdd, quantity: numQuantity }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product_id === cartItemToRemove.product_id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.product_id === cartItemToRemove.product_id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(
    (cartItem) => cartItem.product_id !== cartItemToClear.product_id
  );

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  clearAllItemsFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd, numQuantity) => {
    setCartItems(addCartItem(cartItems, productToAdd, numQuantity));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const clearAllItemsFromCart = () => {
    setCartItems([]);
  };

  const value = {
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    clearAllItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
