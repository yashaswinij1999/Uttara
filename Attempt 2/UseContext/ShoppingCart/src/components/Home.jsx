import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";

function Home() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="min-h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 ">
        {product.map((el) => (
          <Products key={el.id} products={el} />
        ))}
      </div>
    </>
  );
}

export default Home;
