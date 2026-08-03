import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import { getDashboardSummary } from "../services/taskService";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import TaskOverviewChart from "../components/dashboard/TaskOverviewChart";
import UpcomingTasks from "../components/dashboard/UpcomingTasks";
import ProgressCard from "../components/dashboard/ProgressCard";

function Dashboard() {


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

  const [summary, setSummary] = useState({
    totalTasks: 0,

    completedTasks: 0,

    pendingTasks: 0,

    highPriorityTasks: 0,

    overdueTasks: 0,

    dueToday: 0,

    completionPercentage: 0,
  });

  useEffect(() => {
    loadDashboard();

    loadUpcomingTasks();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">Welcome Pushkar 🚀</h1>

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

        <DashboardCard title="Pending" value={summary.pendingTasks} icon="⏳" />

        <DashboardCard
          title="High Priority"
          value={summary.highPriorityTasks}
          icon="🔥"
        />

        <DashboardCard title="Overdue" value={summary.overdueTasks} icon="🔴" />

        <DashboardCard title="Due Today" value={summary.dueToday} icon="📅" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <TaskStatusChart
          completed={summary.completedTasks}
          pending={summary.pendingTasks}
        />

        <TaskOverviewChart summary={summary} />
      </div>

      <div className="mt-10">
        <upcomingTasks tasks={upcomingTasks} />
      </div>

      <div className="mt-10">
           
           <ProgressCard
           
                progress={summary.completionPercentage} 

           />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
