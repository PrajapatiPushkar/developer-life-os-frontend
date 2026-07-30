import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";

function Dashboard() {

    const dashboardData = {

        tasks: 12,
        goals: 5,
        dsa: 120,
        applications: 18

    };

    return (

        <MainLayout>

            <h1 className="text-4xl font-bold">

                Welcome Pushkar 🚀

            </h1>

            <p className="text-gray-400 mt-2">

                Welcome back to your Developer-Life-OS Dashboard.

            </p>

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

        </MainLayout>

    );

}

export default Dashboard;