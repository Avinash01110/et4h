import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/operations/authAPI";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Seo from "../utils/seo.js";
import seoData from "../utils/seoConfig.js";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler() {
    console.log(loginData);
    dispatch(login(loginData.email, loginData.password, navigate));
  }

  return (
    <>
      <Seo {...seoData.login} />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="flex flex-col gap-2 items-center justify-center w-[300px] p-8 bg-black rounded-lg border border-white/50">
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={loginData.email}
            onChange={changeHandler}
            placeholder="Email"
            className="w-full text-sm py-2 px-2 mb-4 bg-black outline-none rounded text-white border border-white/50 focus:border-white"
          />

          <label
            htmlFor="password"
            className="block text-white font-semibold mb-2"
          >
            Password
          </label>
          <div className="h-10 w-full flex items-center bg-transparent border-[1.5px] border-white/50 rounded px-2 group focus-within:border-white">
            <input
              type={showPassword ? "" : "password"}
              id="password"
              name="password"
              onChange={changeHandler}
              placeholder="Password"
              value={loginData.password}
              className="w-full text-sm bg-transparent py-2 mr-3 rounded outline-none focus:outline-none border-none focus:border-none text-white"
            />
            {showPassword ? (
              <FaRegEye
                size={22}
                onClick={() => setShowPassword(!showPassword)}
                className="text-white cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                onClick={() => setShowPassword(!showPassword)}
                className="text-white cursor-pointer"
              />
            )}
          </div>

          <button
            onClick={submitHandler}
            className="mt-4 py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
