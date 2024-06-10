import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/authAPI';

const Login = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    function changeHandler(e){
        setLoginData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));

    }
    function submitHandler(e){
        e.preventDefault();
        console.log(loginData);
        dispatch(login(loginData.email, loginData.password, navigate));
    }
  return (
    <div>
      <form onSubmit={submitHandler} className="w-[100px]  p-4 lg:p-8">
        <label htmlFor="email" className="text-richblack-5 font-semibold text-[1.125rem] leading-[1.625rem]"> Email </label>
        <input type="email" name="email" id="email" value={loginData.email} onChange={changeHandler} className="w-[250px] h-[20px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50" />
        <label htmlFor="password" className="text-richblack-5 font-semibold text-[1.125rem] leading-[1.625rem]"> Password </label>
        <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" id="password" value={loginData.password} 
            onChange={changeHandler} className="w-[250px] h-[20px] border-0 bg-richblack-800 p-7 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute p-7 right-2 top-2 text-richblack-5">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
        </div>
        <button type="submit" className="w-[100px] h-[30px] bg-yellow-400 text-richblack-5 rounded-[0.5rem] mt-4">Login</button>
      </form>
    </div>
  )
}

export default Login
