import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TaskCard from "../components/task/TaskCard";
import AddTaskModal from "../components/task/AddTaskModal";
import { getAllTasks } from "../services/taskService";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Load Tasks from Backend
    const loadTasks = async () => {

        try {

            const response = await getAllTasks();

            console.log("Tasks Response:", response.data);

            // Since backend returns Page<Task>
            setTasks(response.data.content);

        } catch (error) {

            console.error("Error Loading Tasks:", error);

        }

    };

    useEffect(() => {

        loadTasks();

    }, []);

    return (

        <MainLayout>

            {/* Header */}

            <div className="flex justify-between items-center">

                <h1 className="text-4xl font-bold">
                    Task Manager
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-lg font-semibold"
                >
                    + Add Task
                </button>

            </div>

            {/* Search */}

            <input
                type="text"
                placeholder="Search Task..."
                className="mt-8 w-full bg-slate-800 p-4 rounded-lg outline-none text-white"
            />

            {/* Task List */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

                {tasks.length === 0 ? (

                    <div className="col-span-2 text-center text-gray-400 text-xl">

                        No Tasks Found

                    </div>

                ) : (

                    tasks.map((task) => (

                        <TaskCard
                            key={task.id}
                            title={task.title}
                            priority={task.priority}
                            status={task.status}
                        />

                    ))

                )}

            </div>

            {/* Add Task Modal */}

            <AddTaskModal
                isOpen={showModal}
                onClose={() => {

                    setShowModal(false);

                    // Reload Tasks after modal closes
                    loadTasks();

                }}
            />

        </MainLayout>

    );

}

export default TaskManager;