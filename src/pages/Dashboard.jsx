import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
import TaskStatusChart from "../components/dashboard/TaskStatusChart";
import TaskOverviewChart from "../components/dashboard/TaskOverviewChart";
import UpcomingTasks from "../components/dashboard/UpcomingTasks";
import ProgressCard from "../components/dashboard/ProgressCard";

import {
  getDashboardSummary,
  getUpcomingTasks,
} from "../services/taskService";

import { getPlannerStatistics } from "../services/plannerService";
import { getGoalStatistics } from "../services/goalService";
import { getStatistics as getProblemStatistics } from "../services/problemService";
import { getStatistics as getInternshipStatistics } from "../services/internshipService";

function Dashboard() {

  // ==========================
  // Task Summary
  // ==========================

  const [summary, setSummary] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    highPriorityTasks: 0,
    overdueTasks: 0,
    dueToday: 0,
    completionPercentage: 0,
  });

  // ==========================
  // Planner Summary
  // ==========================

  const [plannerSummary, setPlannerSummary] = useState({
    totalPlans: 0,
  });

  // ==========================
  // Goal Summary
  // ==========================

  const [goalSummary, setGoalSummary] = useState({
    totalGoals: 0,
  });

  // ==========================
  // DSA Summary
  // ==========================

  const [problemSummary, setProblemSummary] = useState({
    totalProblems: 0,
  });

  // ==========================
  // Internship Summary
  // ==========================

  const [internshipSummary, setInternshipSummary] = useState({
    totalApplications: 0,
  });

  // ==========================
  // Upcoming Tasks
  // ==========================

  const [upcomingTasks, setUpcomingTasks] = useState([]);

  // ==========================
  // useEffect
  // ==========================

  useEffect(() => {

    loadDashboard();

    loadUpcomingTasks();

    loadPlannerSummary();

    loadGoalSummary();

    loadProblemSummary();

    loadInternshipSummary();

  }, []);

  // ==========================
  // Load Task Summary
  // ==========================

  const loadDashboard = async () => {

    try {

      const response = await getDashboardSummary();

      setSummary(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Upcoming Tasks
  // ==========================

  const loadUpcomingTasks = async () => {

    try {

      const response = await getUpcomingTasks();

      setUpcomingTasks(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Planner Summary
  // ==========================

  const loadPlannerSummary = async () => {

    try {

      const response = await getPlannerStatistics();

      setPlannerSummary(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Goal Summary
  // ==========================

  const loadGoalSummary = async () => {

    try {

      const response = await getGoalStatistics();

      setGoalSummary(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // DSA Summary
  // ==========================

  const loadProblemSummary = async () => {

    try {

      const response = await getProblemStatistics();

      setProblemSummary(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // Internship Summary
  // ==========================

  const loadInternshipSummary = async () => {

    try {

      const response = await getInternshipStatistics();

      setInternshipSummary(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <MainLayout>

      <h1 className="text-4xl font-bold">

        Welcome Pushkar 🚀

      </h1>

      <p className="text-gray-400 mt-2">

        Welcome back to your Developer-Life-OS Dashboard.

      </p>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">

        <DashboardCard

          title="Tasks"

          value={summary.totalTasks}

          icon="📋"

        />

        <DashboardCard

          title="Planner"

          value={plannerSummary.totalPlans}

          icon="📅"

        />

        <DashboardCard

          title="Goals"

          value={goalSummary.totalGoals}

          icon="🎯"

        />

        <DashboardCard

          title="DSA"

          value={problemSummary.totalProblems}

          icon="📚"

        />

        <DashboardCard

          title="Applications"

          value={internshipSummary.totalApplications}

          icon="💼"

        />

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <TaskStatusChart

          completed={summary.completedTasks}

          pending={summary.pendingTasks}

        />

        <TaskOverviewChart

          summary={summary}

        />

      </div>

      {/* Upcoming Tasks */}

      <div className="mt-10">

        <UpcomingTasks

          tasks={upcomingTasks}

        />

      </div>

      {/* Progress */}

      <div className="mt-10">

        <ProgressCard

          progress={summary.completionPercentage}

        />

      </div>

    </MainLayout>

  );

}

export default Dashboard;