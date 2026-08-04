function TodayFocus({ planners }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6 mb-8">

            <h2 className="text-2xl font-bold mb-5">

                🔥 Today's Focus

            </h2>

            {

                planners.length === 0 ?

                (

                    <p>

                        No Focus Tasks 🎉

                    </p>

                )

                :

                (

                    planners.map((planner)=>(

                        <div

                            key={planner.id}

                            className="flex justify-between py-3 border-b border-slate-700"

                        >

                            <span>

                                {planner.title}

                            </span>

                            <span>

                                {planner.timeSlot}

                            </span>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default TodayFocus;