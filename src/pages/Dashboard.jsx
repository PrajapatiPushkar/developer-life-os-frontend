import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import { getDashboardSummary } from "../services/taskService";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import TaskOverviewChart from "../components/dashboard/TaskOverviewChart";
import UpcomingTasks from "../components/dashboard/UpcomingTasks";

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

    const [upcomingTasks, setUpcomingTasks] = useState([]);

    const loadUpcomingTasks = async () => {

    try {

        const response = await getUpcomingTasks();

        setUpcomingTasks(response.data);

    } catch (error) {

        console.error(error);

    }

};

    useEffect(() => {

        loadDashboard();

        loadUpcomingTasks();

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

            <div className="grid lg:grid-cols-2 gap-8 mt-10">

                <TaskStatusChart
                
                  completed={summary.completedTasks}

                  pending={summary.pendingTasks}
                
                />

                <TaskOverviewChart

                    summary={summary}

                />

            </div>

            <div className="mt-10">

                <upcomingTasks
                
                   tasks={upcomingTasks}

                />

            </div>

        </MainLayout>

    );

}

export default Dashboard;