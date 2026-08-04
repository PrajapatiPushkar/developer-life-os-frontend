function PlannerProgress({

    planners

}) {

    const total = planners.length;

    const completed = planners.filter(

        p => p.completed

    ).length;

    const progress =

        total === 0

            ? 0

            : (completed / total) * 100;

    return (

        <div className="bg-slate-800 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold">

                Today's Progress

            </h2>

            <div className="w-full bg-slate-700 h-5 rounded-full mt-5">

                <div

                    className="bg-green-500 h-5 rounded-full"

                    style={{

                        width: `${progress}%`

                    }}

                />

            </div>

            <p className="mt-4">

                {completed}/{total} Completed

            </p>

        </div>

    );

}

export default PlannerProgress;