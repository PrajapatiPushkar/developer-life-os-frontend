import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            await registerUser(formData);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            alert(error.response?.data || "Registration Failed");

        }

    };

    return (

        <div className="min-h-screen bg-slate-900 flex justify-center items-center">

            <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl">

                <h1 className="text-3xl text-cyan-400 font-bold text-center">

                    Developer-Life-OS

                </h1>

                <p className="text-center text-gray-400 mt-2">

                    Create your account

                </p>

                <form
                    onSubmit={handleRegister}
                    className="space-y-4 mt-8"
                >

                    <input
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    />

                    <button
                        className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-bold"
                    >

                        Create Account

                    </button>

                </form>

                <p className="text-center text-gray-400 mt-5">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-cyan-400 ml-2"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;