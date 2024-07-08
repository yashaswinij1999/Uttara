import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";

function TotalPrice() {
  const { state } = useContext(cartContext);

  const total = state.reduce((sum, el) => sum + el.qty * el.price, 0);

  return (
    <div className="text-2xl text-green-400 m-5">TotalPrice : ${total}</div>
  );
}

export default TotalPrice;
