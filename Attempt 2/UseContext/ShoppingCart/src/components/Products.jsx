import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";

function Products({ products }) {
  const { dispatch } = useContext(cartContext);

  return (
    <>
      <div className="w-80 h-80 shadow-lg m-2 p-2 hover:scale-90">
        <div className="flex items-center  p-2 h-1/2 w-40 justify-center m-auto">
          <img src={products.image} className="w-40 h-40" />
        </div>
        <div className="h-1/2 text-center p-2 m-2">
          <p className="text-sm font-semibold truncate">{products.title}</p>
          <p className="font-semibold m-2">${products.price}</p>
          <button
            className="h-10 bg-slate-500 text-white p-2 rounded-lg"
            onClick={() =>
              dispatch({
                type: "add",
                payload: {
                  id: products.id,
                  image: products.image,
                  title: products.title,
                  price: products.price,
                },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
