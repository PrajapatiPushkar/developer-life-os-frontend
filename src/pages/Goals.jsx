import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GoalCard from "../components/goals/GoalCard";
import { getAllGoals } from "../services/goalService";

function Goals() {

    const [goals, setGoals] = useState([]);

    useEffect(() => {
        loadGoals();
    }, []);

    const loadGoals = async () => {

        try {

            const response = await getAllGoals();

            setGoals(response.data);

        } catch (error) {

            console.error("Error loading goals:", error);

        }

    };

    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Goal Tracker

                </h1>

                <button
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"
                >
                    + Add Goal
                </button>

            </div>

            {

                goals.length === 0 ? (

                    <div className="bg-slate-800 rounded-xl p-8 text-center">

                        <h2 className="text-xl text-gray-300">

                            No Goals Found

                        </h2>

                    </div>

                ) : (

                    <div className="grid md:grid-cols-2 gap-6">

                        {

                            goals.map((goal) => (

                                <GoalCard

                                    key={goal.id}

                                    goal={goal}

                                />

                            ))

                        }

                    </div>

                )

            }

        </MainLayout>

    );

}

export default Goals;