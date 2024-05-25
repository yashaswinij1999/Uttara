import React from "react";
import { useCart } from "../Hook/Context";
import { useNavigate } from "react-router-dom";

function ProductsCard({ data }) {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  function addToCart(id, image, title, price) {
    dispatch({
      type: "Add",
      payload: { id: id, image: image, title: title, price: price },
    });
  }

  const handleSubmit = function (product) {
    addToCart(product.id, product.image, product.title, product.price);
    navigate("cart");
  };

  return (
    <>
      {data.map((el) => {
        return (
          <div
            key={el.id}
            className="h-96 rounded-lg shadow-md bg-white p-4 m-4 hover:scale-90"
          >
            <div className="m-auto w-3/4 h-1/2">
              <img className="w-1/2 h-full m-auto" src={el.image}></img>
            </div>
            <div className="text-sm font-medium mt-4">
              <p className="mt-2">{el.title}</p>
              <p>${el.price}</p>
              <button
                className="bg-slate-500 text-white p-2 rounded-md mt-2 "
                onClick={() => handleSubmit(el)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductsCard;
