import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

        const response = await loginUser({

            username: username,

            password: password

        });

        console.log(response.data);

        localStorage.setItem("token", response.data.token);

        alert("Login Successful");

        navigate("/dashboard");

    } catch (error) {

     console.error("Complete Error:", error);

     console.error("Response:", error.response);

     console.error("Data:", error.response?.data);

        alert("Login Failed");

    }

};

  return (

    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Developer-Life-OS
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Login to continue
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >

          {/* Username */}

          <div>

            <label className="text-white block mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

          </div>

          {/* Password */}

          <div>

            <label className="text-white block mb-2">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="button"
              className="text-cyan-400 mt-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">

    Don't have an account?

    <span

        onClick={() => navigate("/register")}

        className="text-cyan-400 cursor-pointer ml-2"

    >

        Register

    </span>

</p>

        {/* Learning Purpose */}

        <div className="mt-6 text-white">

          <p>
            Username : <span className="text-cyan-400">{username}</span>
          </p>

          <p>
            Password : <span className="text-cyan-400">{password}</span>
          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;