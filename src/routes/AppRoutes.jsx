import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import TaskManager from "../pages/TaskManager";
import DailyPlanner from "../pages/DailyPlanner";
import Goals from "../pages/Goals";
import Dsa from "../pages/Dsa";
import Internships from "../pages/Internships";
import NotFound from "../pages/NotFound";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                  path="/profile"

                  element={

                    <ProtectedRoute>

                      <Profile />

                    </ProtectedRoute>

                  }

                />

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

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;