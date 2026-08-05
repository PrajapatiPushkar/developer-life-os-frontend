function GoalCard({ goal }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold">

                {goal.title}

            </h2>

            <p className="mt-3">

                {goal.description}

            </p>

            <div className="mt-5">

                <p>

                    Progress

                </p>

                <div className="w-full bg-slate-700 h-4 rounded-full mt-2">

                    <div

                        className="bg-cyan-500 h-4 rounded-full"

                        style={{

                            width:`${goal.progress}%`

                        }}

                    />

                </div>

                <p className="mt-2">

                    {goal.progress}%

                </p>

            </div>

        </div>

    );

}

export default GoalCard;