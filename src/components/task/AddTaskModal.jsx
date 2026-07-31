import { useState } from "react";
import { createTask } from "../../services/taskService";

function AddTaskModal({ isOpen, onClose }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [dueDate, setDueDate] = useState("");

    const [status, setStatus] = useState("PENDING");
    const [category, setCategory] = useState("STUDY");

    if (!isOpen) return null;

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const taskData = {

            title,
            description,
            completed: false,
            priority,
            dueDate,
            status,
            category

        };

        console.log(taskData);

        await createTask(taskData);

        alert("Task Created Successfully 🎉");

        onClose();

    } catch (error) {

        console.error(error);

        alert("Failed to create task");

    }

};


    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-slate-800 w-full max-w-lg rounded-xl p-8">

                <h2 className="text-3xl font-bold text-cyan-400 mb-6">

                    Add New Task

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input

                        type="text"

                        placeholder="Task Title"

                        value={title}

                        onChange={(e)=>setTitle(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700 outline-none"

                    />

                    <textarea

                        placeholder="Description"

                        value={description}

                        onChange={(e)=>setDescription(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700 outline-none"

                    />

                    <select

                        value={priority}

                        onChange={(e)=>setPriority(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700"

                    >

                        <option>HIGH</option>
                        <option>MEDIUM</option>
                        <option>LOW</option>

                    </select>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700"
                    >
                        <option value="PENDING">PENDING</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700"
                    >
                        <option value="STUDY">STUDY</option>
                        <option value="WORK">WORK</option>
                        <option value="PERSONAL">PERSONAL</option>
                        <option value="HEALTH">HEALTH</option>
                    </select>

                    <input

                        type="date"

                        value={dueDate}

                        onChange={(e)=>setDueDate(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700"

                    />

                    <div className="flex justify-end gap-4">

                        <button

                            type="button"

                            onClick={onClose}

                            className="bg-gray-500 px-5 py-2 rounded"

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="bg-cyan-500 px-5 py-2 rounded"

                        >

                            Create Task

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddTaskModal;