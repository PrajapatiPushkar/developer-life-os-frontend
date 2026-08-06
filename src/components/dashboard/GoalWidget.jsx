function GoalWidget({ goals }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">

                🎯 Active Goals

            </h2>

            {

                goals.length === 0 ?

                    (

                        <p className="text-gray-400">

                            No Goals Found

                        </p>

                    )

                    :

                    goals.slice(0, 5).map(goal => (

                        <div

                            key={goal.id}

                            className="border-b border-slate-700 py-2"

                        >

                            <p className="font-semibold">

                                {goal.title}

                            </p>

                            <p className="text-sm text-gray-400">

                                {goal.status}

                            </p>

                        </div>

                    ))

            }

        </div>

    );

}

export default GoalWidget;