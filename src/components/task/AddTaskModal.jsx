import { useState, useEffect } from "react";
import { createTask, updateTask } from "../../services/taskService";

function AddTaskModal({ isOpen, onClose, task }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [dueDate, setDueDate] = useState("");

    const [status, setStatus] = useState("TODO");
    const [category, setCategory] = useState("STUDY");

    useEffect(() => {

        if (task) {

            setTitle(task.title);
            setDescription(task.description);
            setPriority(task.priority);
            setDueDate(task.dueDate);
            setStatus(task.status);
            setCategory(task.category);

        } else {

            resetForm();

        }

    }, [task, isOpen]);

    const resetForm = () => {

        setTitle("");
        setDescription("");
        setPriority("MEDIUM");
        setDueDate("");
        setStatus("TODO");
        setCategory("STUDY");

    };

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

            if (task) {

                await updateTask(task.id, taskData);

                alert("Task Updated Successfully 🎉");

            } else {

                await createTask(taskData);

                alert("Task Created Successfully 🎉");

            }

            resetForm();

            onClose();

        } catch (error) {

            console.error(error);

            alert(task ? "Failed to update task" : "Failed to create task");

        }

    };

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-slate-800 w-full max-w-lg rounded-xl p-8">

                <h2 className="text-3xl font-bold text-cyan-400 mb-6">

                    {task ? "Update Task" : "Add New Task"}

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Title */}

                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white outline-none"
                        required
                    />

                    {/* Description */}

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white outline-none"
                        required
                    />

                    {/* Priority */}

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    >
                        <option value="HIGH">HIGH</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="LOW">LOW</option>
                    </select>

                    {/* Status */}

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    >
                        <option value="TODO">TODO</option>
                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>

                    {/* Category */}

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                    >
                        <option value="STUDY">STUDY</option>
                        <option value="DSA">DSA</option>
                        <option value="SPRING_BOOT">SPRING_BOOT</option>
                        <option value="INTERNSHIP">INTERNSHIP</option>
                        <option value="JOB">JOB</option>
                        <option value="GYM">GYM</option>
                        <option value="PERSONAL">PERSONAL</option>
                        <option value="OTHER">OTHER</option>
                    </select>

                    {/* Due Date */}

                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full p-3 rounded bg-slate-700 text-white"
                        required
                    />

                    {/* Buttons */}

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={() => {

                                resetForm();

                                onClose();

                            }}
                            className="bg-gray-500 hover:bg-gray-600 px-5 py-2 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded"
                        >

                            {task ? "Update Task" : "Create Task"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddTaskModal;