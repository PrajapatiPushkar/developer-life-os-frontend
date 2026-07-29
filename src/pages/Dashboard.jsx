import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/dashboard/DashboardCard";

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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                         <DashboardCard
                            title="Tasks"
                            value="12"
                            icon="📋"
                        />

                        <DashboardCard
                            title="Goals"
                            value="5"
                            icon="🎯"
                        />

                        <DashboardCard
                            title="DSA Solved"
                            value="120"
                            icon="📚"
                        />

                        <DashboardCard
                            title="Applications"
                            value="18"
                            icon="💼"
                        />

                        </div>

                    <p className="mt-3 text-gray-400">
                        This is your Developer-Life-OS Dashboard.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;