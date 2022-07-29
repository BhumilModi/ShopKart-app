import React from "react";

const Cartcards = ({product}) => {
  return (
    <div className="mx-5 my-4 w-[90%] h-[140px] rounded-md shadow-md border-b-2 border-black p-0 flex">
      <img
        src={product.image}
        alt=""
        className="w-[25%] h-full object-cover overflow-hidden"
      />
      <div className="px-2 w-[70%]">
        <h1 className="text-[18px] text-gray-500 text-semibold">
          {product.title}
        </h1>
        <h2 className="text-[16px] text-gray-500 text-semibold">
          Rs. {product.amount}
        </h2>
        <div className="px-5 flex mt-2">
          <div className="mx-5 text-[20px]">+</div>
          <div className="px-5 rounded-sm mt-1 border-2 border-gray-300 ">
            1
          </div>
          <div className="mx-5 text-[20px]">-</div>
        </div>
      </div>
    </div>
  );
};

export default Cartcards;
