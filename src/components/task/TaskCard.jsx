function TaskCard({ task, onEdit, onDelete }) {

    return (

        <div className="bg-slate-800 rounded-xl p-5 shadow-lg">

            <h2 className="text-2xl font-bold text-cyan-400">

                📋 {task.title}

            </h2>

            <p className="mt-3 text-gray-300">

                {task.description}

            </p>

            <p className="mt-3">

                <span className="font-semibold">
                    Priority :
                </span>

                <span className="text-cyan-400 ml-2">

                    {task.priority}

                </span>

            </p>

            <p className="mt-2">

                <span className="font-semibold">
                    Status :
                </span>

                <span className="text-green-400 ml-2">

                    {task.status}

                </span>

            </p>

            <div className="flex gap-4 mt-6">

                <button
                    onClick={() => onEdit(task)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
                >
                    ✏ Edit
                </button>

                <button
                    onClick={() => onDelete(task.id)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                >
                    🗑 Delete
                </button>

            </div>

        </div>

    );

}

export default TaskCard;