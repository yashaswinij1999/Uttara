import { useContext } from "react";
import { cartContext } from "../Hooks/CartContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import TotalPrice from "./TotalPrice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const { state, increment, decrementQuantity } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <>
      {state.map((el) => (
        <div
          key={el._id}
          className="w-1/2 h-36 m-2 shadow-lg flex justify-between "
        >
          <div className="w-1/4  h-36">
            <img src={el.image} className="h-32 m-2  w-36" />
          </div>
          <div className="w-1/2  text-center p-2 h-20 m-7 font-semibold">
            <p>{el.title}</p>
            <p>${el.price}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center gap-2">
            <div onClick={() => increment(el._id)}>
              <FaPlus />
            </div>
            <div>{el.quantity}</div>
            <div onClick={() => decrementQuantity(el._id)}>
              <FaMinus />
            </div>
          </div>
        </div>
      ))}
      <TotalPrice />
      <div className="flex gap-2">
        <button
          className="bg-slate-700 text-white p-2 rounded-lg"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
        <button
          className="bg-slate-700 text-white p-2 rounded-lg"
          onClick={() => navigate("/checkout")}
        >
          CheckOut
        </button>
      </div>
    </>
  );
}

export default CartItem;
