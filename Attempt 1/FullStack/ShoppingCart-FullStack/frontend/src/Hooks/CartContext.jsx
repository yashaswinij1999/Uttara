import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const cartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;

    case "add": {
      const existing = state.find((el) => el._id === action.payload._id);
      if (existing) {
        return state.map((el) =>
          el._id === action.payload._id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "increment": {
      return state.map((el) =>
        el._id === action.payload._id
          ? { ...el, quantity: action.payload.quantity }
          : el
      );
    }
    case "decrement":
      return state
        .map((el) =>
          el._id === action.payload.id
            ? { ...el, quantity: action.payload.quantity - 1 }
            : el
        )
        .filter((el) => el.quantity > 0);

    default:
      return state;
  }
};

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  console.log(state);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "http://localhost:3000/shoppingcart/cart/getCart"
      );
      dispatch({ type: "get", payload: response.data });
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  }

  async function addToCart(id, title, price, image) {
    console.log(title, image);
    try {
      await axios.post("http://localhost:3000/shoppingcart/cart/addToCart", {
        _id: id,
        title: title,
        price: parseInt(price),
        image: image,
      });
      dispatch({
        type: "add",
        payload: {
          _id: id,
          title: title,
          price: price,
          image: image,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function increment(id) {
    try {
      const update = await axios.patch(
        `http://localhost:3000/shoppingcart/cart/update/${id}`,
        { $inc: true }
      );
      dispatch({ type: "increment", payload: update.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function decrementQuantity(id) {
    try {
      const response = await axios.patch(
        `http://localhost:3000/shoppingcart/cart/decrement/${id}`
      );
      dispatch({ type: "decrement", payload: response.data });
      await getData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <cartContext.Provider
      value={{ state, dispatch, increment, addToCart, decrementQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
