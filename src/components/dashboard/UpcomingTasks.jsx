function UpcomingTasks({ tasks }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-5">

                Upcoming Tasks

            </h2>

            {

                tasks.length === 0 ?

                (

                    <p>No Upcoming Tasks</p>

                )

                :

                tasks.map((task) => (

                    <div

                        key={task.id}

                        className="border-b border-slate-700 py-3"

                    >

                        <h3 className="font-semibold">

                            {task.title}

                        </h3>

                        <p className="text-gray-400">

                            Due :

                            {task.dueDate}

                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default UpcomingTasks;