import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const updateCart = (newCart) => {
    setItems(newCart);
    localStorage.setItem("items", JSON.stringify(newCart));
  };

  // const addToCart = (product) => {
  //   const newCart = [...items, product];
  //   updateCart(newCart);
  // };

  const addToCart = (product) => {
    setItems((oldState) => {
      const existingItemIndex = oldState.findIndex(
        (item) => item.name === product.name
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...oldState];
        updatedItems[existingItemIndex].quantity++;
        return updatedItems;
      }
      return [...oldState, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (index) => {
    const newCart = [...items];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  const incrementQuantity = (index) => {
    const newCart = [...items];
    newCart[index].quantity++;
    updateCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...items];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      updateCart(newCart);
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("items"));
    if (storedCart) {
      setItems(storedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };
export default CartContext;
