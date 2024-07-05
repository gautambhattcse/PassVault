import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-900 flex flex-col justify-center items-center w-full">
      <div className="logo font-bold text-white text-2xl">
        &#x24;
        <span className="text-green-700 p-1">&#123;</span>
        Pass<span className="text-green-700">V</span>ault
        <span className="text-green-700 p-1">&#125;</span>
      </div>
      <div className="text-white font-medium align-middle">Created by Gautam Bhatt</div>
    </div>
  );
};

export default Footer;
