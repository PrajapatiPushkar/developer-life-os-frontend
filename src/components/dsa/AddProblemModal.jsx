import { useEffect, useState } from "react";
import Modal from "react-modal";
import { createProblem } from "../../services/problemService";

Modal.setAppElement("#root");

function AddProblemModal({ isOpen, onClose, problem }) {

    const [formData, setFormData] = useState({

        title: "",

        platform: "LEETCODE",

        difficulty: "EASY",

        topic: "ARRAYS",

        solved: false,

        problemLink: "",

        solutionLink: "",

        notes: "",

        solvedDate: ""

    });

    useEffect(() => {

        if (problem) {

            setFormData(problem);

        }

    }, [problem]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({

            ...formData,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createProblem(formData);

            alert("Problem Added Successfully 🎉");

            onClose();

        }

        catch (error) {

            console.error(error);

            alert("Failed to Add Problem");

        }

    };

    return (

        <Modal

            isOpen={isOpen}

            onRequestClose={onClose}

            className="bg-slate-900 text-white w-[600px] p-8 rounded-xl mx-auto mt-10"

            overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start"

        >

            <h2 className="text-3xl font-bold mb-6">

                Add Problem

            </h2>

            <form

                onSubmit={handleSubmit}

                className="space-y-4"

            >

                <input

                    type="text"

                    name="title"

                    placeholder="Problem Title"

                    value={formData.title}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                />

                <select

                    name="platform"

                    value={formData.platform}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                >

                    <option>LEETCODE</option>

                    <option>GEEKSFORGEEKS</option>

                    <option>CODECHEF</option>

                    <option>CODEFORCES</option>

                    <option>HACKERRANK</option>

                    <option>INTERVIEWBIT</option>

                </select>

                <select

                    name="difficulty"

                    value={formData.difficulty}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                >

                    <option>EASY</option>

                    <option>MEDIUM</option>

                    <option>HARD</option>

                </select>

                <select

                    name="topic"

                    value={formData.topic}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                >

                    <option>ARRAYS</option>

                    <option>STRINGS</option>

                    <option>LINKED_LIST</option>

                    <option>STACK</option>

                    <option>QUEUE</option>

                    <option>TREE</option>

                    <option>GRAPH</option>

                    <option>DYNAMIC_PROGRAMMING</option>

                    <option>GREEDY</option>

                    <option>BINARY_SEARCH</option>

                </select>

                <input

                    type="text"

                    name="problemLink"

                    placeholder="Problem Link"

                    value={formData.problemLink}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                />

                <input

                    type="text"

                    name="solutionLink"

                    placeholder="Solution Link"

                    value={formData.solutionLink}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                />

                <textarea

                    name="notes"

                    placeholder="Notes"

                    value={formData.notes}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                />

                <input

                    type="date"

                    name="solvedDate"

                    value={formData.solvedDate}

                    onChange={handleChange}

                    className="w-full p-3 rounded bg-slate-800"

                />

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        name="solved"

                        checked={formData.solved}

                        onChange={handleChange}

                    />

                    Solved

                </label>

                <div className="flex gap-4">

                    <button

                        type="submit"

                        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded"

                    >

                        Save

                    </button>

                    <button

                        type="button"

                        onClick={onClose}

                        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded"

                    >

                        Cancel

                    </button>

                </div>

            </form>

        </Modal>

    );

}

export default AddProblemModal;