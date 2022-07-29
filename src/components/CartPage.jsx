import React, {useEffect, useState} from "react";
import axios from "axios";
import Cartcards from "./Cartcards";

const CartPage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="w-[1200px] mx-auto h-full py-5 ">
      <div className="flex">
        <div className="w-[550px] mx-5 bg-white p-5 shadow-md rounded-md">
          <h1 className="text-bold text-[26px] mb-5">My Cart</h1>
          {products.map((product) => (
            <Cartcards product={product} />
          ))}
        </div>
        <div className="w-[350px] h-[300px] bg-white p-5 shadow-md rounded-md">
          <h1 className="text-bold text-[26px] text-gray-500">Price Details</h1>
          <div className="border-b-2 border-black">
            <div className="flex justify-between text-[14px] text-semibold my-4">
              <h2>Price</h2>
              <h2>2150</h2>
            </div>
            <div className="flex justify-between text-[14px] text-semibold my-4">
              <h2>Discount</h2>
              <h2>100</h2>
            </div>
            <div className="flex justify-between text-[14px] text-semibold my-4">
              <h2>Delivery</h2>
              <h2>50</h2>
            </div>
          </div>
          <div className="flex justify-between text-[20px] text-bold my-8">
            <h2>Total</h2>
            <h2>2100</h2>
          </div>
        </div>
      </div>
      <button className="mx-5 mt-5 px-5 py-2 rounded-md text-white bg-[#0379ed]">
        Place order
      </button>
    </div>
  );
};

export default CartPage;
