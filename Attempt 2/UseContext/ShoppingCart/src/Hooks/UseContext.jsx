import { createContext, useReducer } from "react";

export const cartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
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
    }
    case "increment":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );

    case "decrement":
      return state
        .map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
        )
        .filter((el) => el.quantity > 0);
  }
};

function UseContext({ children }) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <cartContext.Provider value={{ state, dispatch }}>
        {children}
      </cartContext.Provider>
    </>
  );
}

export default UseContext;
