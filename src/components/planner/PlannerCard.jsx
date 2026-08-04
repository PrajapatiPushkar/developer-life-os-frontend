function PlannerCard({ planner }) {

    return (

        <div className="bg-slate-800 rounded-xl p-5 shadow-lg">

            <h2 className="text-2xl font-bold">

                {planner.title}

            </h2>

            <p className="text-gray-300 mt-2">

                {planner.description}

            </p>

            <div className="mt-4 space-y-2">

                <p>

                    Time Slot :

                    <span className="text-cyan-400 ml-2">

                        {planner.timeSlot}

                    </span>

                </p>

                <p>

                    Date :

                    <span className="text-green-400 ml-2">

                        {planner.plannerDate}

                    </span>

                </p>

                <p>

                    Status :

                    <span className="ml-2">

                        {

                            planner.completed

                                ? "✅ Completed"

                                : "⏳ Pending"

                        }

                    </span>

                </p>

            </div>

        </div>

    );

}

export default PlannerCard;