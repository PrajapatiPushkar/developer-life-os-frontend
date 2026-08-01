import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddTaskModal from "../components/task/AddTaskModal";
import TaskCard from "../components/task/TaskCard";

import {
    getAllTasks,
    deleteTask,
    searchTasks,
    filterTasks
} from "../services/taskService";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("ALL");

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

        setSelectedTask(task);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        try {

            await deleteTask(id);

            alert("Task Deleted Successfully 🎉");

            loadTasks();

        } catch (error) {

            console.error(error);

            alert("Failed to delete task");

        }

    };

    const handleSearch = async (e) => {

        const keyword = e.target.value;

        setSearchKeyword(keyword);

        try {

            if (keyword.trim() === "") {

                loadTasks();

                return;

            }

            const response = await searchTasks(keyword);

            setTasks(response.data.content);

        } catch (error) {

            console.error(error);

        }

    };

    const handlePriorityFilter = async (e) => {

    const priority = e.target.value;

    setSelectedPriority(priority);

    try {

        if (priority === "ALL") {

            loadTasks();

            return;

        }

        const response = await filterTasks(priority);

        setTasks(response.data);

    } catch (error) {

        console.error(error);

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

            {/* Search Box */}

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="🔍 Search Tasks..."
                    value={searchKeyword}
                    onChange={handleSearch}
                    className="w-full bg-slate-800 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
                />

            </div>

            {/* Task List */}

            <div className="my-6">

    <select

        value={selectedPriority}

        onChange={handlePriorityFilter}

        className="bg-slate-800 text-white p-3 rounded-lg"

    >

        <option value="ALL">All Priorities</option>
        <option value="HIGH">HIGH</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LOW">LOW</option>

    </select>

</div>

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

            {/* Modal */}

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