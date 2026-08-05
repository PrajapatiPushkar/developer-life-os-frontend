function ProblemStatistics({ statistics }) {

    return (

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">

            <StatCard title="Total" value={statistics.totalProblems} />

            <StatCard title="Solved" value={statistics.solvedProblems} />

            <StatCard title="Unsolved" value={statistics.unsolvedProblems} />

            <StatCard title="Easy" value={statistics.easyProblems} />

            <StatCard title="Medium" value={statistics.mediumProblems} />

            <StatCard title="Hard" value={statistics.hardProblems} />

        </div>

    );

}

function StatCard({ title, value }) {

    return (

        <div className="bg-slate-800 rounded-xl p-5 text-center">

            <h2 className="text-gray-400">

                {title}

            </h2>

            <p className="text-3xl font-bold mt-3">

                {value}

            </p>

        </div>

    );

}

export default ProblemStatistics;