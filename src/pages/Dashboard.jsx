import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import { getDashboardSummary } from "../services/taskService";

function Dashboard() {

    const [summary, setSummary] = useState({

        totalTasks: 0,
        completedTasks: 0,
        pendingTasks: 0,
        highPriorityTasks: 0

    });

    const loadDashboard = async () => {

        try {

            const response = await getDashboardSummary();

            console.log(response.data);

            setSummary(response.data);

        } catch (error) {

            console.error("Error loading dashboard:", error);

        }

    };

    useEffect(() => {

        loadDashboard();

    }, []);

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
                    title="Total Tasks"
                    value={summary.totalTasks}
                    icon="📋"
                />

                <DashboardCard
                    title="Completed"
                    value={summary.completedTasks}
                    icon="✅"
                />

                <DashboardCard
                    title="Pending"
                    value={summary.pendingTasks}
                    icon="⏳"
                />

                <DashboardCard
                    title="High Priority"
                    value={summary.highPriorityTasks}
                    icon="🔥"
                />

            </div>

        </MainLayout>

    );

}

export default Dashboard;