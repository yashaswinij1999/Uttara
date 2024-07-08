import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {state.length === 0 ? (
        <div className="text-center p-2">no items in the cart</div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen ">
          <div className="text-2xl ">Cart Item</div>
          <CartItem />
          <TotalPrice />
          <div className="flex  gap-4">
            <button
              className="h-12 bg-blue-500 p-2 rounded-lg text-white"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button
              className="h-12 bg-blue-500 p-2 rounded-lg text-white"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
