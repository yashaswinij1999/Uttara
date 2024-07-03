import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import TotalPrice from "./TotalPrice";
import { useNavigate } from "react-router-dom";

function CartCard() {
  const { state, dispatch } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <>
      {state.map((el) => (
        <div
          className="w-1/2 p-2 shadow-lg m-2 h-40 flex justify-between rounded-lg"
          key={el.id}
        >
          <div className="w-1/3 h-36  ">
            <img src={el.image} className=" h-32 m-2" />
          </div>
          <div className="w-1/2 h-24  text-center m-7 font-semibold">
            <p>{el.title}</p>
            <p>${el.price}</p>
          </div>
          <div className="w-1/3 h-36 flex justify-center items-center gap-2">
            <FaPlus
              onClick={() =>
                dispatch({ type: "increment", payload: { id: el.id } })
              }
            />
            <div>{el.quantity}</div>
            <FaMinus
              onClick={() =>
                dispatch({ type: "decrement", payload: { id: el.id } })
              }
            />
          </div>
        </div>
      ))}
      <TotalPrice />
      <div className="flex gap-4">
        <button
          className="bg-slate-500 text-white h-10 p-2 rounded-lg"
          onClick={() => navigate("/")}
        >
          Continue Shoping
        </button>
        <button
          className="bg-slate-500 text-white h-10 p-2 rounded-lg"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default CartCard;
