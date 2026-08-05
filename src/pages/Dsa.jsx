import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProblemStatistics from "../components/dsa/ProblemStatistics";
import ProblemCard from "../components/dsa/ProblemCard";
import AddProblemModal from "../components/dsa/AddProblemModal";

import {
    getAllProblems,
    getStatistics,
    deleteProblem
} from "../services/problemService";

function Dsa() {

    const [problems, setProblems] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [selectedProblem, setSelectedProblem] = useState(null);

    const [search, setSearch] = useState("");

    const [difficulty, setDifficulty] = useState("ALL");

    const [platform, setPlatform] = useState("ALL");

    const [topic, setTopic] = useState("ALL");

    const [status, setStatus] = useState("ALL");

    const [statistics, setStatistics] = useState({

        totalProblems: 0,
        solvedProblems: 0,
        unsolvedProblems: 0,
        easyProblems: 0,
        mediumProblems: 0,
        hardProblems: 0

    });

    useEffect(() => {

        loadProblems();

        loadStatistics();

    }, []);

    const loadProblems = async () => {

        try {

            const response = await getAllProblems();

            setProblems(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const loadStatistics = async () => {

        try {

            const response = await getStatistics();

            setStatistics(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const handleEdit = (problem) => {

        setSelectedProblem(problem);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this problem?"))

            return;

        try {

            await deleteProblem(id);

            loadProblems();

            loadStatistics();

            alert("Problem Deleted");

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <MainLayout>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        DSA Progress Tracker

                    </h1>

                    <p className="text-gray-400 mt-2">

                        Track your coding journey.

                    </p>

                </div>

                <button

                    onClick={() => {

                        setSelectedProblem(null);

                        setShowModal(true);

                    }}

                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"

                >

                    + Add Problem

                </button>

            </div>

            {/* Statistics */}

            <ProblemStatistics statistics={statistics} />

            {/* Problem List */}

            {

                problems.length === 0 ?

                    (

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2 className="text-xl text-gray-300">

                                No Problems Found

                            </h2>

                        </div>

                    )

                    :

                    (

                        <div className="grid md:grid-cols-2 gap-6">

                            {

                                problems.map((problem) => (

                                    <ProblemCard

                                        key={problem.id}

                                        problem={problem}

                                        onEdit={handleEdit}

                                        onDelete={handleDelete}

                                    />

                                ))

                            }

                        </div>

                    )

            }

            {/* Add Problem Modal */}

            <AddProblemModal

                isOpen={showModal}

                problem={selectedProblem}

                onClose={() => {

                    setShowModal(false);

                    setSelectedProblem(null);

                    loadProblems();

                    loadStatistics();

                }}

            />

        </MainLayout>

    );

}

export default Dsa;