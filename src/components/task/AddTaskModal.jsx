import { useState } from "react";

function AddTaskModal({ isOpen, onClose }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("MEDIUM");
    const [dueDate, setDueDate] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log({
            title,
            description,
            priority,
            dueDate
        });

        alert("Task Created (Frontend)");

        onClose();

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