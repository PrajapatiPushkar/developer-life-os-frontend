import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddTaskModal from "../components/task/AddTaskModal";
import TaskCard from "../components/task/TaskCard";
import { deleteTask, getAllTasks } from "../services/taskService";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

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

    const handleEdit = (task) => {

        console.log("Selected Task:");

        console.log(task);

        setSelectedTask(task);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            
            await deleteTask(id);

            alert("Task Deleted Successfully  🎉");

            loadTasks();

        } catch (error) {
            
            console.error(error);

            alert("Failed to delete task");
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
                    onClick={() => {

                        setSelectedTask(null);

                        setShowModal(true);

                    }}
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

                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />

                            ))

                        }

                    </div>

                )

            }

            {/* Add Task Modal */}

            <AddTaskModal
                isOpen={showModal}
                task={selectedTask}
                onClose={() => {

                    setShowModal(false);

                    setSelectedTask(null);

                    loadTasks();

                }}
            />

        </MainLayout>

    );

}

export default TaskManager;