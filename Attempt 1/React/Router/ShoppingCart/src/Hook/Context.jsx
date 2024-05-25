import { createContext, useContext, useReducer } from "react";

const ShoppingContext = createContext();

const reducer = function (state, action) {
  switch (action.type) {
    case "Add":
      const newState = [
        ...state,
        {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
        },
      ];
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <ShoppingContext.Provider value={{ state, dispatch }}>
        {children}
      </ShoppingContext.Provider>
    </>
  );
};

export const useCart = () => {
  const context = useContext(ShoppingContext);
  if (!useCart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
