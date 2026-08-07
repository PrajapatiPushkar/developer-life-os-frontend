import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="bg-slate-800 h-16 flex items-center justify-between px-8 shadow-lg">

            <h1
                onClick={() => navigate("/")}
                className="text-2xl font-bold text-cyan-400 cursor-pointer"
            >
                Developer-Life-OS
            </h1>

            {

                token ? (

                    <div className="flex items-center gap-6">

                        <button className="text-2xl">

                            🔔

                        </button>

                        <div className="flex items-center gap-2">

                            <span>👤</span>

                            <span className="text-white">

                                User

                            </span>

                        </div>

                        <button

                            onClick={handleLogout}

                            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"

                        >

                            Logout

                        </button>

                    </div>

                ) : (

                    <div className="flex gap-4">

                        <button

                            onClick={() => navigate("/login")}

                            className="text-cyan-400"

                        >

                            Login

                        </button>

                        <button

                            onClick={() => navigate("/register")}

                            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg"

                        >

                            Register

                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default Navbar;