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
          <div className="min-h-screen m-2">
            <h3 className="mb-2">Your Cart Items</h3>
            {state.map((el) => (
              <div key={el.id} className="m-4">
                <div className=" w-1/2 m-auto h-1/2 flex bg-white rounded-md shadow-lg justify-between">
                  <div className="w-24 ">
                    <img
                      src={el.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-2  flex flex-col justify-center items-center p-2">
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                  </div>
                  <div className=" flex justify-center items-center p-2">
                    <div className="p-1">➕</div>
                    <div className="p-1">2</div>
                    <div className="p-1">➖</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
