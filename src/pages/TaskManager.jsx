import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddTaskModal from "../components/task/AddTaskModal";
import { getAllTasks } from "../services/taskService";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {

        try {

            const response = await getAllTasks();

            console.log(response.data);

            setTasks(response.data.content);

        } catch (error) {

            console.error("Error Loading Tasks:", error);

        }

    };

    return (

        <MainLayout>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">
                    Task Manager
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"
                >
                    + Add Task
                </button>

            </div>

            {/* Task List */}

            {

                tasks.length === 0 ? (

                    <div className="bg-slate-800 rounded-xl p-6 text-center">

                        <h2 className="text-xl text-gray-300">
                            No Tasks Found
                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 gap-6">

                        {

                            tasks.map((task) => (

                                <div
                                    key={task.id}
                                    className="bg-slate-800 p-5 rounded-xl shadow-lg"
                                >

                                    <h2 className="text-2xl font-bold text-cyan-400">

                                        {task.title}

                                    </h2>

                                    <p className="mt-3 text-gray-300">

                                        {task.description}

                                    </p>

                                    <div className="mt-4 space-y-2">

                                        <p>

                                            <span className="font-semibold">
                                                Priority :
                                            </span>{" "}

                                            {task.priority}

                                        </p>

                                        <p>

                                            <span className="font-semibold">
                                                Status :
                                            </span>{" "}

                                            {task.status}

                                        </p>

                                        <p>

                                            <span className="font-semibold">
                                                Category :
                                            </span>{" "}

                                            {task.category}

                                        </p>

                                        <p>

                                            <span className="font-semibold">
                                                Due Date :
                                            </span>{" "}

                                            {task.dueDate}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {/* Add Task Modal */}

            <AddTaskModal
                isOpen={showModal}
                onClose={() => {

                    setShowModal(false);

                    // Reload tasks after creating a task
                    loadTasks();

                }}
            />

        </MainLayout>

    );

}

export default TaskManager;