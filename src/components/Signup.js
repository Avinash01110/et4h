import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../services/operations/authAPI"

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { setSignupData } from "../slices/authSlice"
import { ACCOUNT_TYPE } from "../utils/constants"

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: ACCOUNT_TYPE.SUPERADMIN,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { username, email, password, confirmPassword } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password did not match")
            return
        }
        console.log("formData", formData)
        const signupData = { ...formData };
        console.log("signupData", signupData);

        try {
        
            dispatch(setSignupData(signupData))
            dispatch(sendOtp(signupData.email , navigate))
            // navigate("/new")
        } catch (error) {
            console.error("Error:", error)
            toast.error("Signup failed. Please try again.")
        }
    }

    return (
        <div className="py-24">
            <form onSubmit={handleOnSubmit} className="flex flex-col">
                <label>
                    Username
                    <input type="text" name="username" value={username} onChange={handleOnChange} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={handleOnChange} />
                </label>
                <label>
                    Password
                    <input type={showPassword ? 'text' : 'password'}
                     name="password" value={password} onChange={handleOnChange} />
                      <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
                </label>
                <label>
                    Confirm Password
                    <input type={showConfirmPassword ? 'text' : 'password'}name="confirmPassword" value={confirmPassword} 
                    onChange={handleOnChange} />
                     <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
