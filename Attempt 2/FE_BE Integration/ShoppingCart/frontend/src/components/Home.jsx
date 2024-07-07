import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Products";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    try {
      const resp = await axios.get("http://localhost:3000/shopApp/getProducts");
      console.log(resp.data);
      setProducts(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-5  m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Products products={products} />
      </div>
    </>
  );
}

export default Home;
