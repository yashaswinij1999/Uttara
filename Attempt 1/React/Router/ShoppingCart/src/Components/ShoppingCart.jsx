import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

function ShoppingCart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async function () {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log("unable to fetch data");
    }
  };

  return (
    <>
      <div>
        {data.length <= 0 ? (
          <p>Loading ....</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <ProductsCard data={data} />
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
