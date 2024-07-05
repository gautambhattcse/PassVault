import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          &#x24;
          <span className="text-green-700 p-1">&#123;</span>
          Pass<span className="text-green-700">V</span>ault
          <span className="text-green-700 p-1">&#125;</span>
        </div>
        <div className="flex justify-between gap-2">
          <button>
            <a href="https://github.com/gautambhattcse" target="_blank">
              <img
                className="invert p-1  w-10"
                src="/github-mark.png"
                alt="github-mark"
              />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/gautam-bhatt/" target="_blank">
              <img
                className=" p-1  w-10"
                src="/LinkedIn.png"
                alt="linkedin-mark"
              />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
