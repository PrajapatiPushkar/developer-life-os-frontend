import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-950 text-white">

            {/* Hero Section */}

            <div className="flex flex-col items-center justify-center h-screen px-6">

                <h1 className="text-6xl font-extrabold text-cyan-400 text-center">

                    Developer-Life-OS

                </h1>

                <p className="text-gray-400 text-xl mt-6 text-center max-w-2xl">

                    Your Personal Productivity Platform for Engineering Students.

                    Manage Tasks, DSA, Goals, Planner and Internship Applications

                    all in one place.

                </p>

                <div className="flex gap-6 mt-10">

                    <button

                        onClick={() => navigate("/register")}

                        className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition"

                    >

                        Get Started

                    </button>

                    <button

                        onClick={() => navigate("/login")}

                        className="border border-cyan-500 hover:bg-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold transition"

                    >

                        Login

                    </button>

                </div>

            </div>

            {/* Features */}

            <div className="max-w-7xl mx-auto px-8 py-20">

                <h2 className="text-4xl font-bold text-center mb-12">

                    Features

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <FeatureCard
                        icon="📋"
                        title="Task Manager"
                        description="Organize your daily tasks efficiently."
                    />

                    <FeatureCard
                        icon="📅"
                        title="Daily Planner"
                        description="Plan your day with a clean schedule."
                    />

                    <FeatureCard
                        icon="🎯"
                        title="Goal Tracker"
                        description="Track your personal and career goals."
                    />

                    <FeatureCard
                        icon="📚"
                        title="DSA Tracker"
                        description="Monitor coding practice and progress."
                    />

                    <FeatureCard
                        icon="💼"
                        title="Internship Tracker"
                        description="Manage all internship applications."
                    />

                    <FeatureCard
                        icon="🔔"
                        title="Notifications"
                        description="Never miss deadlines and reminders."
                    />

                </div>

            </div>

            {/* Footer */}

            <div className="border-t border-slate-800 py-8 text-center text-gray-500">

                © 2026 Developer-Life-OS

                <br />

                Built with ❤️ using React + Spring Boot

            </div>

        </div>

    );

}

function FeatureCard({ icon, title, description }) {

    return (

        <div className="bg-slate-900 rounded-2xl p-8 hover:scale-105 transition shadow-lg">

            <div className="text-5xl">

                {icon}

            </div>

            <h3 className="text-2xl font-bold mt-5">

                {title}

            </h3>

            <p className="text-gray-400 mt-3">

                {description}

            </p>

        </div>

    );

}

export default Home;