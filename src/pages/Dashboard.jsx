import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/dashboard/DashboardCard";
import { useEffect } from "react";
// import { getAllTasks } from "../services/taskService";

function Dashboard() {

    // Temporary Dashboard Data
    const dashboardData = {
        tasks: 12,
        goals: 5,
        dsa: 120,
        applications: 18
    };

    /*
    ===== Backend Integration (Lesson 60) =====

    const [taskCount, setTaskCount] = useState(0);

    const loadTasks = async () => {

        try {

            const response = await getAllTasks();

            console.log(response.data);

            setTaskCount(response.data.totalElements);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadTasks();

    }, []);

    */

    useEffect(() => {

        console.log("Dashboard Loaded");

    }, []);

    return (

        <div className="bg-slate-950 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-8 text-white">

                    <h1 className="text-4xl font-bold">
                        Welcome Pushkar 🚀
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Welcome back to your Developer-Life-OS Dashboard.
                    </p>

                    {/* Dashboard Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                        <DashboardCard
                            title="Tasks"
                            value={dashboardData.tasks}
                            icon="📋"
                        />

                        <DashboardCard
                            title="Goals"
                            value={dashboardData.goals}
                            icon="🎯"
                        />

                        <DashboardCard
                            title="DSA Solved"
                            value={dashboardData.dsa}
                            icon="📚"
                        />

                        <DashboardCard
                            title="Applications"
                            value={dashboardData.applications}
                            icon="💼"
                        />

                    </div>

                    {/* Recent Activity */}

                    <div className="mt-10 bg-slate-800 rounded-xl p-6 shadow-lg">

                        <h2 className="text-2xl font-bold mb-5 text-cyan-400">
                            Recent Activity
                        </h2>

                        <ul className="space-y-3">

                            <li>✅ Spring Boot Authentication Completed</li>

                            <li>🚀 React Dashboard Created</li>

                            <li>📚 Solved 5 DSA Problems</li>

                            <li>💼 Applied to 2 Internships</li>

                        </ul>

                    </div>

                    {/* Today's Goals */}

                    <div className="mt-8 bg-slate-800 rounded-xl p-6 shadow-lg">

                        <h2 className="text-2xl font-bold mb-5 text-cyan-400">
                            Today's Goals
                        </h2>

                        <ul className="space-y-3">

                            <li>⬜ Complete React Lesson</li>

                            <li>⬜ Solve 2 DSA Questions</li>

                            <li>⬜ Apply to Internship</li>

                            <li>⬜ Push Project to GitHub</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;