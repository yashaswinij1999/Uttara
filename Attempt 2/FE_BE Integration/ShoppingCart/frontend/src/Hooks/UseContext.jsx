import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

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
    case "get":
      return action.payload;

    case "increment":
      return state.map((el) =>
        el._id === action.payload.id ? { ...el, qty: el.qty + 1 } : el
      );

    case "decrement":
      return state
        .map((el) =>
          el._id === action.payload.id ? { ...el, qty: el.qty - 1 } : el
        )
        .filter((el) => el.qty > 1);
  }
};

function UseContext({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const response = await axios.get("http://localhost:3000/shopApp/getCart");
      dispatch({ type: "get", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <cartContext.Provider value={{ state, dispatch }}>
        {children}
      </cartContext.Provider>
    </>
  );
}

export default UseContext;
