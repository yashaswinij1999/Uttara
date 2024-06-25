import { useContext } from "react";
import { cartContext } from "../Hooks/CartContext";

export default function TotalPrice() {
  const { state } = useContext(cartContext);

  const totalPrice = function () {
    return state.reduce((total, el) => total + el.quantity * el.price, 0);
  };

  return (
    <>
      <div className="text-green-400 text-2xl m-4 font-semibold">
        Total Price : {totalPrice()}
      </div>
    </>
  );
}
