import { useState } from "react";
import { createPlanner } from "../../services/plannerService";

function AddPlannerModal({

    isOpen,

    onClose

}) {

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [timeSlot, setTimeSlot] = useState("MORNING");

    const [plannerDate, setPlannerDate] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createPlanner({

                title,

                description,

                timeSlot,

                plannerDate

            });

            alert("Planner Created Successfully 🎉");

            onClose();

        }

        catch (error) {

            console.error(error);

            alert("Failed");

        }

    };

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

            <div className="bg-slate-800 rounded-xl p-8 w-full max-w-lg">

                <h2 className="text-3xl font-bold mb-6">

                    Add Planner

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >

                    <input

                        value={title}

                        onChange={(e) =>

                            setTitle(e.target.value)}

                        placeholder="Title"

                        className="w-full p-3 rounded bg-slate-700"

                        required

                    />

                    <textarea

                        value={description}

                        onChange={(e) =>

                            setDescription(e.target.value)}

                        placeholder="Description"

                        className="w-full p-3 rounded bg-slate-700"

                    />

                    <select

                        value={timeSlot}

                        onChange={(e) =>

                            setTimeSlot(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700"

                    >

                        <option>MORNING</option>

                        <option>AFTERNOON</option>

                        <option>EVENING</option>

                        <option>NIGHT</option>

                    </select>

                    <input

                        type="date"

                        value={plannerDate}

                        onChange={(e) =>

                            setPlannerDate(e.target.value)}

                        className="w-full p-3 rounded bg-slate-700"

                    />

                    <div className="flex justify-end gap-3">

                        <button

                            type="button"

                            onClick={onClose}

                            className="bg-gray-500 px-5 py-2 rounded"

                        >

                            Cancel

                        </button>

                        <button

                            className="bg-cyan-500 px-5 py-2 rounded"

                        >

                            Save

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddPlannerModal;