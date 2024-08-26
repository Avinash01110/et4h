import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/operations/authAPI';

const Login = ({setIsLoggedIn}) => {
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

    function submitHandler(e) {
        e.preventDefault();
        console.log(loginData);
        dispatch(login(loginData.email, loginData.password, navigate));
    }

    return (
        <div className="flex justify-center items-center h-screen bg-slate-700">
            <form onSubmit={submitHandler} className="w-[300px] p-8 bg-gray-800 rounded-lg">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={loginData.email} 
                    onChange={changeHandler} 
                    className="w-full p-2 mb-4 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                />

                <label htmlFor="password" className="block text-white font-semibold mb-2">
                    Password
                </label>
                <div className="flex items-center">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        id="password" 
                        value={loginData.password} 
                        onChange={changeHandler} 
                        className="w-full p-2 bg-gray-700 rounded-l text-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="p-2 w-6 mx-2 bg-yellow-500 text-gray-900 rounded-r"
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                </div>

                <button type="submit" className="w-full mt-4 p-2 bg-yellow-500 text-gray-900 font-semibold rounded">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
