import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let Passwords = localStorage.getItem("passwords");
    if (Passwords) {
      setPasswordArray(JSON.parse(Passwords));
    }
  }, []);

  const copyText = (text) => {
    toast.success("Copied to clipboard!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    if (ref.current.src.includes("/hidden.png")) {
      ref.current.src = "/eye.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "/hidden.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]),
      );
      console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
      toast.success("Saved!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Invalid Inputs", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    console.log("editing password with id ", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id ", id);
    let c = confirm("Do you really want to delete the passord?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id)),
      );
      toast.success("Deleted!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="p-3 md:mycontainer min-h-[88.2vh]">
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
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 "
            type="text"
            name="site"
            id="site"
            placeholder="Website URL"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 "
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-1  focus:outline-none focus:ring-2 focus:ring-green-500 "
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="src/assets/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-600 rounded-full px-4 py-2 w-fit hover:bg-green-500 font-bold gap-2 border-2 border-green-900 ring-1 ring-white"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 text-white">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-white"> No Passwords to show </div>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className=" py-2 border border-white text-center">
                      <div className="flex items-center justify-center">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{item.site}</span>
                        </a>
                        <div
                          className="size-7 cursor-pointer flex items-center justify-center"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <img
                            src="/copy-icon.png"
                            alt="copy-icon"
                            style={{
                              width: "16px",
                              height: "16px",
                              paddingTop: "3px",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className=" py-2 border border-white text-center ">
                      <div className="flex items-center justify-center">
                        <span>{item.username}</span>
                        <div
                          className="size-7 cursor-pointer flex items-center justify-center"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <img
                            src="/copy-icon.png"
                            alt="copy-icon"
                            style={{
                              width: "16px",
                              height: "16px",
                              paddingTop: "3px",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="  py-2 border border-white text-center ">
                      <div className="flex items-center justify-center">
                        <span>{item.password}</span>
                        <div
                          className="size-7 cursor-pointer flex items-center justify-center"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <img
                            src="/copy-icon.png"
                            alt="copy-icon"
                            style={{
                              width: "16px",
                              height: "16px",
                              paddingTop: "3px",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className=" justify-center py-2 border border-white text-center ">
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
