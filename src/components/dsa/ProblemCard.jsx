function ProblemCard({ problem }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold">

                {problem.title}

            </h2>

            <div className="mt-4 space-y-2">

                <p>

                    Platform : {problem.platform}

                </p>

                <p>

                    Difficulty : {problem.difficulty}

                </p>

                <p>

                    Topic : {problem.topic}

                </p>

                <p>

                    Status :

                    {problem.solved ? " ✅ Solved" : " ❌ Pending"}

                </p>

            </div>

        </div>

    );

}

export default ProblemCard;