import { useState } from "react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Developer-Life-OS
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Login to continue
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="text-white block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>

            <label className="text-white block mb-2">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
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

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );

}

export default Login;