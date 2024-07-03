import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import CartCard from "./CartCard";

function Cart() {
  const { state } = useContext(cartContext);

  return (
    <>
      {state.length === 0 ? (
        <div className="text-center p-4">No Items in the Cart</div>
      ) : (
        <div className="min-h-screen flex  items-center flex-col m-10">
          <div className="text-2xl">Cart Items</div>
          <CartCard />
        </div>
      )}
    </>
  );
}

export default Cart;
