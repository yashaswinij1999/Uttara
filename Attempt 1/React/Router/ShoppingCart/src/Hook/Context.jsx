import { act, createContext, useContext, useReducer } from "react";

const ShoppingContext = createContext();

const reducer = function (state, action) {
  switch (action.type) {
    case "Add":
      const existingItem = state.find((el) => el.id === action.payload.id);

      if (existingItem) {
        return state.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            quantity: 1,
          },
        ];
      }

    case "increment":
      return state.map((el) =>
        action.payload.id === el.id ? { ...el, quantity: el.quantity + 1 } : el
      );

    case "decrement":
      return state
        .map((el) =>
          action.payload.id === el.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
        )
        .filter((el) => el.quantity > 0);

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
