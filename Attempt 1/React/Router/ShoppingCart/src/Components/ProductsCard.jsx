import React from "react";

function ProductsCard({ data }) {
  return (
    <>
      {data.map((el) => {
        return (
          <div
            key={el.id}
            className="h-96 rounded-lg shadow-md bg-white p-4 m-4 "
          >
            <div className="m-auto h-3/4">
              <img className="w-1/2 h-full m-auto" src={el.image}></img>
            </div>
            <div className="text-sm font-medium">
              <p>{el.title}</p>
              <p>${el.price}</p>
              <button className="bg-slate-500 text-white p-2 rounded-md">
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
