import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    const response = await axios.get(
      "http://localhost:3000/shoppingcart/products/"
    );
    setData(response.data);
  };

  return (
    <>
      <div className="min-h-screen p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ProductItem data={data} />
      </div>
    </>
  );
}

export default ProductList;
