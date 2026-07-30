function TaskCard({ title, priority, status }) {

    return (

        <div className="bg-slate-800 rounded-xl p-5 shadow-lg">

            <h2 className="text-2xl font-bold">

                📋 {title}

            </h2>

            <p className="mt-2">

                Priority :
                <span className="text-cyan-400 ml-2">

                    {priority}

                </span>

            </p>

            <p>

                Status :
                <span className="text-green-400 ml-2">

                    {status}

                </span>

            </p>

            <div className="flex gap-4 mt-5">

                <button
                    className="bg-yellow-500 px-4 py-2 rounded"
                >
                    Edit
                </button>

                <button
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default TaskCard;