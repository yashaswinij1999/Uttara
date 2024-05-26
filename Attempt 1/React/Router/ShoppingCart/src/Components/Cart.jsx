import React from "react";
import { useCart } from "../Hook/Context";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  function incrementQunatity(id) {
    dispatch({ type: "increment", payload: { id: id } });
  }

  function decrementQunatity(id) {
    dispatch({ type: "decrement", payload: { id } });
  }

  function totalPrice() {
    return state.reduce((total, el) => total + el.quantity * el.price, 0);
  }

  return (
    <>
      {state.length === 0 ? (
        <p className="text-red-400">Your shopping cart is empty </p>
      ) : (
        <div>
          <div className="min-h-screen m-2">
            <h3 className="mb-2">Your Cart Items</h3>
            {state.map((el) => (
              <div key={el.id} className="m-4 ">
                <div className="flex w-1/2 m-auto h-1/2  bg-white rounded-md shadow-lg justify-between">
                  <div className="w-24 ">
                    <img
                      src={el.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="m-2  flex flex-col justify-center items-center p-2">
                    <p text-center lg:text-left>
                      {el.title}
                    </p>
                    <p className="text-center lg:text-left">{el.price}</p>
                  </div>
                  <div className=" flex flex-col lg:flex-row justify-center items-center p-2">
                    <div
                      className="p-1 cursor-pointer"
                      onClick={() => incrementQunatity(el.id)}
                    >
                      ➕
                    </div>
                    <div className="p-1 cursor-pointer">{el.quantity}</div>
                    <div
                      className="p-1"
                      onClick={() => decrementQunatity(el.id)}
                    >
                      ➖
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div>Total Items : ${totalPrice()}</div>
            </div>
            <div className="m-2">
              <button
                className="bg-slate-700 text-white p-2 m-1 rounded-md"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="bg-slate-700 text-white p-2 m-1 rounded-md"
                onClick={() => navigate("/payments")}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
