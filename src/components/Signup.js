import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../services/operations/authAPI"
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

    const { username, email, password, confirmPassword, userType } = formData

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password did not match")
            return
        }
        console.log("formData", formData)

        try {
        
            dispatch(setSignupData(formData))
            dispatch(sendOtp(formData.email , navigate))
            navigate("/new")
        } catch (error) {
            console.error("Error:", error)
            toast.error("Signup failed. Please try again.")
        }
    }

    return (
        <div>
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
                    <input type="password" name="password" value={password} onChange={handleOnChange} />
                </label>
                <label>
                    Confirm Password
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
