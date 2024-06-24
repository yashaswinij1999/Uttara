import { useContext } from "react";
import { cartContext } from "../Hooks/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state } = useContext(cartContext);

  return (
    <>
      {state.length === 0 ? (
        <div>No Items in the Cart</div>
      ) : (
        <>
          <div className="flex items-center flex-col min-h-screen">
            <div className="m-5 text-center text-xl">Cart Items</div>
            <CartItem />
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
