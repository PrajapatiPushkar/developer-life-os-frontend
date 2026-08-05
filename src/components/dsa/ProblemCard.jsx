function ProblemCard({

    problem,

    onEdit,

    onDelete

}) {

    return (

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">

            {/* Title */}

            <h2 className="text-2xl font-bold text-cyan-400">

                {problem.title}

            </h2>

            {/* Problem Details */}

            <div className="mt-4 space-y-2 text-gray-300">

                <p>

                    <span className="font-semibold text-white">
                        Platform :
                    </span>{" "}

                    {problem.platform}

                </p>

                <p>

                    <span className="font-semibold text-white">
                        Difficulty :
                    </span>{" "}

                    {problem.difficulty}

                </p>

                <p>

                    <span className="font-semibold text-white">
                        Topic :
                    </span>{" "}

                    {problem.topic}

                </p>

                <p>

                    <span className="font-semibold text-white">
                        Status :
                    </span>{" "}

                    {problem.solved
                        ? "✅ Solved"
                        : "❌ Pending"}

                </p>

            </div>

            {/* Action Buttons */}

            <div className="flex gap-3 mt-6">

                <button

                    onClick={() => onEdit(problem)}

                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition"

                >

                    ✏️ Edit

                </button>

                <button

                    onClick={() => onDelete(problem.id)}

                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"

                >

                    🗑 Delete

                </button>

            </div>

        </div>

    );

}

export default ProblemCard;