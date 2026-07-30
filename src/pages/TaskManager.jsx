import MainLayout from "../layouts/MainLayout";
import TaskCard from "../components/task/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/task/AddTaskModal";

function TaskManager() {

  const [showModal, setShowModal] = useState(false);

    const tasks = [

        {
            id: 1,
            title: "Learn Spring Boot",
            priority: "HIGH",
            status: "Pending"
        },

        {
            id: 2,
            title: "Solve 2 DSA Questions",
            priority: "MEDIUM",
            status: "Completed"
        },

        {
            id: 3,
            title: "Apply Internship",
            priority: "LOW",
            status: "Pending"
        }

    ];

    return (

        <MainLayout>

            <div className="flex justify-between items-center">

                <h1 className="text-4xl font-bold">

                    Task Manager

                </h1>

                <button

                    onClick={()=>setShowModal(true)}

                    className="bg-cyan-500 px-5 py-3 rounded-lg font-semibold"
                >

                    + Add Task

                </button>

            </div>

            <input

                type="text"

                placeholder="Search Task..."

                className="mt-8 w-full bg-slate-800 p-4 rounded-lg outline-none"

            />

            <div className="grid md:grid-cols-2 gap-6 mt-10">

                {tasks.map((task) => (

                    <TaskCard

                        key={task.id}

                        title={task.title}

                        priority={task.priority}

                        status={task.status}

                    />

                ))}

            </div>

            <AddTaskModal

            isOpen={showModal}

            onClose={()=>setShowModal(false)}

            />

        </MainLayout>

    );

}

export default TaskManager;