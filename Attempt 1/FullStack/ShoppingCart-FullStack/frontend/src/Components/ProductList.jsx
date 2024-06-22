import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:3000/products/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return <div>ProductList</div>;
}

export default ProductList;
