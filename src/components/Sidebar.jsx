function Sidebar() {

    return (

        <div className="w-64 bg-slate-900 text-white min-h-screen p-5">

            <h2 className="text-xl font-bold mb-6">
                Menu
            </h2>

            <ul className="space-y-4">

                <li className="hover:text-cyan-400 cursor-pointer">
                    🏠 Dashboard
                </li>

                <li className="hover:text-cyan-400 cursor-pointer">
                    ✅ Task Manager
                </li>

                <li className="hover:text-cyan-400 cursor-pointer">
                    📅 Daily Planner
                </li>

                <li className="hover:text-cyan-400 cursor-pointer">
                    🎯 Goal Tracker
                </li>

                <li className="hover:text-cyan-400 cursor-pointer">
                    📚 DSA Progress
                </li>

                <li className="hover:text-cyan-400 cursor-pointer">
                    💼 Internship Tracker
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;