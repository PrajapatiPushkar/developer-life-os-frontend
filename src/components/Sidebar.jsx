import { NavLink } from "react-router-dom";

function Sidebar() {

    const menuItems = [

        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "🏠"
        },

        {
            name: "Task Manager",
            path: "/tasks",
            icon: "📋"
        },

        {
            name: "Daily Planner",
            path: "/planner",
            icon: "📅"
        },

        {
            name: "Goal Tracker",
            path: "/goals",
            icon: "🎯"
        },

        {
            name: "DSA Progress",
            path: "/dsa",
            icon: "📚"
        },

        {
            name: "Internships",
            path: "/internships",
            icon: "💼"
        },

        {
            name: "Profile",
            path: "/profile",
            icon: "👤"
        }

    ];

    return (

        <div className="w-64 bg-slate-900 min-h-screen text-white shadow-xl">

            <div className="p-6">

                <h2 className="text-2xl font-bold text-cyan-400">

                    Menu

                </h2>

            </div>

            <nav className="mt-6">

                {

                    menuItems.map((item) => (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>

                                `flex items-center gap-3 px-6 py-4 transition

                                ${isActive

                                    ? "bg-cyan-500 text-white"

                                    : "hover:bg-slate-800"

                                }`

                            }
                        >

                            <span className="text-xl">

                                {item.icon}

                            </span>

                            <span>

                                {item.name}

                            </span>

                        </NavLink>

                    ))

                }

            </nav>

        </div>

    );

}

export default Sidebar;