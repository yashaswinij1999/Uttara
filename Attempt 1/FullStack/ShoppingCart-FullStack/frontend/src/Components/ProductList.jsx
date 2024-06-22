import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:3000/products/");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen m-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {data.map((el) => (
        <Product
          key={el._id}
          title={el.title}
          price={el.price}
          image={el.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
