import { useContext } from "react";
import { cartContext } from "../Hooks/UseContext";
import axios from "axios";

function Products({ products }) {
  const { dispatch } = useContext(cartContext);

  async function addToCart(_id, title, price, image, qty) {
    try {
      await axios.post("http://localhost:3000/shopApp/addToCart", {
        _id,
        title,
        price,
        image,
        qty,
      });
      dispatch({
        type: "add",
        payload: {
          id: _id,
          title: title,
          price: price,
          image: image,
          qty: qty,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {products.map((el) => (
        <div
          key={el._id}
          className="h-80 w-80 m-2 shadow-lg hover:scale-90 flex flex-col p-2 "
        >
          <div className="h-1/2  flex justify-center items-center p-2 ">
            <img src={el.image} className="h-40 w-36" />
          </div>
          <div className="h-1/2  mt-2 text-center ">
            <p className="font-semibold mt-2">{el.title}</p>
            <p className="font-semibold mt-2">${el.price}</p>
            <button
              className="bg-blue-500 h-10 rounded-lg text-white p-2 mt-2"
              onClick={() =>
                addToCart(el._id, el.title, el.price, el.image, el.qty)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
