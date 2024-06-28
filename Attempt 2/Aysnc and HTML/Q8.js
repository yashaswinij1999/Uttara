const { default: axios } = require("axios");

async function getProduct(url) {
  try {
    const data = await axios.get(url);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
}

getProduct("https://fakestoreapi.com/products");
