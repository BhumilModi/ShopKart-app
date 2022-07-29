import React from "react";
import {HiShoppingCart} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

const Navbar = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0379ed] h-[10vh]">
      <div className="w-[900px] flex justify-between mx-auto items-center">
        <div className="text-[36px] text-white mt-2">ShopKart.</div>
        <div className="flex justify-center items-center">
          <div
            className="text-[20px] text-white mx-4 cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
          >
            Products
          </div>
          <div
            className="text-[20px] text-white mx-4 cursor-pointer"
            onClick={() => {
              navigate("/");
              setLoggedIn(false);
            }}
          >
            {loggedIn ? "Logout" : "Login"}
          </div>
          <div
            className="text-[24px] mt-2 ml-4 cursor-pointer"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <HiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
