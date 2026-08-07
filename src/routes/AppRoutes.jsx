import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TaskManager from "../pages/TaskManager";
import Goals from "../pages/Goals";
import Dsa from "../pages/Dsa";
import Internships from "../pages/Internships";
import DailyPlanner from "../pages/DailyPlanner";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TaskManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <DailyPlanner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dsa"
          element={
            <ProtectedRoute>
              <Dsa />
            </ProtectedRoute>
          }
        />

        <Route
          path="/internships"
          element={
            <ProtectedRoute>
              <Internships />
            </ProtectedRoute>
          }
        />

        <Route path="/home" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
