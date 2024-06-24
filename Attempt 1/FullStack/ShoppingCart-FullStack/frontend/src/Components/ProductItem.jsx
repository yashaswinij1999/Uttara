import { useContext } from "react";
import { cartContext } from "../Hooks/CartContext";

function ProductItem({ data }) {
  const { addToCart } = useContext(cartContext);

  function handleAdd(id, title, price, image) {
    addToCart(id, title, price, image);
  }

  return (
    <>
      {data.map((el) => (
        <div
          key={el._id}
          className="flex items-center justify-center p-2 hover:scale-90 shadow-lg m-4"
        >
          <div className="h-80 w-80 ">
            <div className="h-1/2 flex justify-center">
              <img src={el.image} />
            </div>
            <div className="h-1/2 text-center p-2 font-semibold">
              <p>{el.title}</p>
              <p>${el.price}</p>
              <button
                className="bg-slate-600 text-white rounded-lg p-2"
                onClick={() => handleAdd(el._id, el.title, el.price, el.image)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
