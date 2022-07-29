/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Cards from "./Cards";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:5000/products")
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
    <div className="w-[1350px] mx-auto h-full py-5 grid grid-cols-5 gap-5">
      {products.map((product) => (
        <Cards product={product} />
      ))}
    </div>
  );
};

export default Homepage;
