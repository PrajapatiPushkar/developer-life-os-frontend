import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="bg-slate-800 h-16 flex items-center justify-between px-8 shadow-lg">

            <h1 className="text-2xl font-bold text-cyan-400">

                Developer-Life-OS

            </h1>

            <div className="flex items-center gap-6">

                <button
                    className="text-2xl hover:scale-110 transition"
                >
                    🔔
                </button>

                <div className="flex items-center gap-2">

                    <span className="text-xl">
                        👤
                    </span>

                    <span className="text-white font-semibold">
                        Pushkar
                    </span>

                </div>

                <button

                    onClick={handleLogout}

                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-semibold transition"

                >

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Navbar;