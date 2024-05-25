import React from "react";
import { useCart } from "../Hook/Context";

function Cart() {
  const { state, dispatch } = useCart();

  return (
    <>
      {state.length === 0 ? (
        <p className="text-red-400">Your shopping cart is empty </p>
      ) : (
        <div>
          <div>
            <h3>Your Cart Items</h3>
            <div className="min-h-screen border-2 p-4 m-auto">
              {state.map((el) => (
                <div className="w-1/2 h-32 bg-pink-300 flex sm:flex-row md:flex-col border-2 ">
                  <div className="border-2 m-2">
                    <div className="w-24 h-24 border-2">
                      <img src={el.image} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
