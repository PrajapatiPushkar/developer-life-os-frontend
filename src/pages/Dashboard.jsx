import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {

    return (

        <div className="bg-slate-950 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-8 text-white">

                    <h1 className="text-4xl font-bold">
                        Welcome Pushkar 🚀
                    </h1>

                    <p className="mt-3 text-gray-400">
                        This is your Developer-Life-OS Dashboard.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;