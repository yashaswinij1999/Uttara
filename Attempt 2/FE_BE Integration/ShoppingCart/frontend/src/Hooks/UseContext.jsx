import { createContext, useReducer } from "react";

export const cartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const existingitem = state.find((el) =>
        el.id === action.payload.id ? true : false
      );

      console.log(existingitem);

      if (existingitem) {
        return state.map((el) =>
          el.id === action.payload.id ? { ...el, qty: el.qty + 1 } : el
        );
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            image: action.payload.image,
            qty: 1,
          },
        ];
      }
    }
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
