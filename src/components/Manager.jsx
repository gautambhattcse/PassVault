import React from "react";

const Manager = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center text-white">
          &#x24;
          <span className="text-green-700 p-1">&#123;</span>
          Pass<span className="text-green-700">V</span>ault
          <span className="text-green-700 p-1">&#125;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Vault Your Passwords with Confidence
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            placeholder="Website URL"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              placeholder="Username"
            />
            <div className="relative">
              <input
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
                placeholder="Password"
              />
              <span className="absolute right-0">Show</span>
            </div>
          </div>
          <button className="flex justify-center items-center bg-green-600 rounded-full px-4 py-2 w-fit hover:bg-green-500 font-bold gap-2 border-2 border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
