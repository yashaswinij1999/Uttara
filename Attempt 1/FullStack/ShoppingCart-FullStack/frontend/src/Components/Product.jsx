function Product({ title, price, image }) {
  return (
    <div className=" h-80 w-80 m-4 shadow-lg hover:scale-90">
      <div className="h-1/2 m-2 flex justify-center ">
        <img src={image} />
      </div>
      <div className="h-32 m-2 text-center p-2 font-medium">
        <div className="truncate ">{title}</div>
        <div>${price}</div>
        <button className="p-2 rounded-lg bg-slate-600 text-white border-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
