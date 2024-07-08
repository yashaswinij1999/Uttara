import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function CartItem() {
  const { state, dispatch } = useContext(cartContext);

  async function increment(id) {
    console.log("clicked");
    try {
      await axios.patch(`http://localhost:3000/shopApp/increment/${id}`);
      dispatch({ type: "increment", payload: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async function decrement(id) {
    try {
      await axios.patch(`http://localhost:3000/shopApp/decrement/${id}`);
      dispatch({ type: "decrement", payload: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {state.map((el) => (
        <>
          <div className=" w-1/2 p-2 " key={el._id}>
            <div className=" h-40  m-2 flex shadow-lg">
              <div className="h-40 w-1/3  p-2 flex items-center justify-center mt-2">
                <img src={el.image} className="h-36 " />
              </div>
              <div className="h-24 w-1/2  p-2 mt-6 text-center font-semibold">
                <div> {el.title}</div>
                <div>${el.price}</div>
              </div>
              <div className="h-40 w-1/3 p-2 flex justify-center items-center gap-2">
                <div onClick={() => decrement(el._id)}>
                  <FaMinus />
                </div>
                <div>{el.qty}</div>
                <div onClick={() => increment(el._id)}>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default CartItem;
