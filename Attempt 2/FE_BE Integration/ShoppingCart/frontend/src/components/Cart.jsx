import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import CartItem from "./CartItem";

function Cart() {
  const { state } = useContext(cartContext);

  return (
    <div className="min-h-screen">
      {state.length === 0 ? (
        <div className="text-center p-2">no items in the cart</div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen ">
          <div className="text-2xl ">Cart Item</div>
          <CartItem />
        </div>
      )}
    </div>
  );
}

export default Cart;
