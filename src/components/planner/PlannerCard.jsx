function PlannerCard({

    planner,

    onEdit,

    onDelete,

    onToggle

}) {

    return (

        <div className="bg-slate-800 rounded-xl p-5 shadow-lg">

            <div className="flex justify-between">

                <h2 className="text-xl font-bold">

                    {planner.title}

                </h2>

                <button

                    onClick={() => onToggle(planner.id)}

                    className="text-2xl"

                >

                    {

                        planner.completed

                            ? "✅"

                            : "⬜"

                    }

                </button>

            </div>

            <p className="text-gray-300 mt-3">

                {planner.description}

            </p>

            <div className="mt-4 space-y-2">

                <p>

                    📅 {planner.plannerDate}

                </p>

                <p>

                    ⏰ {planner.timeSlot}

                </p>

            </div>

            <div className="flex gap-3 mt-5">

                <button

                    onClick={() => onEdit(planner)}

                    className="bg-yellow-500 px-4 py-2 rounded"

                >

                    Edit

                </button>

                <button

                    onClick={() => onDelete(planner.id)}

                    className="bg-red-500 px-4 py-2 rounded"

                >

                    Delete

                </button>

            </div>

        </div>

    );

}

export default PlannerCard;