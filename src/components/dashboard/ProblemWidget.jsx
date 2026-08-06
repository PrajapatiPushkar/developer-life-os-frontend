function ProblemWidget({ problems }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">

                📚 Recent Problems

            </h2>

            {

                problems.length === 0 ?

                    (

                        <p className="text-gray-400">

                            No Problems

                        </p>

                    )

                    :

                    problems.slice(0, 5).map(problem => (

                        <div

                            key={problem.id}

                            className="border-b border-slate-700 py-2"

                        >

                            <p className="font-semibold">

                                {problem.title}

                            </p>

                            <p className="text-sm text-gray-400">

                                {problem.difficulty}

                            </p>

                        </div>

                    ))

            }

        </div>

    );

}

export default ProblemWidget;