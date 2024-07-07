import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";

function CartItem() {
  const { state } = useContext(cartContext);

  return (
    <>
      {state.map((el) => (
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
              <div className="text-3xl font-semibold">-</div>
              <div className="text-xl font-semibold">{el.qty}</div>
              <div className="text-3xl font-semibold">+</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
