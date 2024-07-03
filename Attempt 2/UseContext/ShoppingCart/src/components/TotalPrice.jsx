import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";

function TotalPrice() {
  const { state } = useContext(cartContext);

  function getTotalPrice() {
    return state.reduce((sum, el) => sum + el.quantity * el.price, 0);
  }

  return (
    <div className="m-5 font-semibold text-2xl">
      TotalPrice :${Math.ceil(getTotalPrice())}{" "}
    </div>
  );
}

export default TotalPrice;
