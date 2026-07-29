function DashboardCard({ title, value, icon }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">

            <div className="text-4xl">

                {icon}

            </div>

            <h2 className="text-gray-400 mt-4">

                {title}

            </h2>

            <h1 className="text-3xl font-bold text-cyan-400 mt-2">

                {value}

            </h1>

        </div>

    );

}

export default DashboardCard;