import PlannerCard from "./PlannerCard";

function PlannerSection({

    title,

    icon,

    planners,

    onEdit,

    onDelete,

    onToggle

}) {

    return (

        <div className="mb-10">

            <h2 className="text-2xl font-bold mb-5">

                {icon} {title}

            </h2>

            {

                planners.length === 0 ?

                (

                    <div className="bg-slate-800 rounded-xl p-5">

                        No Plans

                    </div>

                )

                :

                (

                    <div className="grid md:grid-cols-2 gap-5">

                        {

                            planners.map((planner)=>(

                                <PlannerCard

                                    key={planner.id}

                                    planner={planner}

                                    onEdit={onEdit}

                                    onDelete={onDelete}

                                    onToggle={onToggle}

                                />

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default PlannerSection;