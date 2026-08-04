import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PlannerCard from "../components/planner/PlannerCard";
import AddPlannerModal from "../components/planner/AddPlannerModal";
import { getAllPlanners } from "../services/plannerService";

function DailyPlanner() {

    const [planners, setPlanners] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanner, setSelectedPlanner] = useState(null);

    useEffect(() => {
        loadPlanner();
    }, []);

    const loadPlanner = async () => {

        try {

            const response = await getAllPlanners();

            setPlanners(response.data);

        } catch (error) {

            console.error("Error loading planners:", error);

        }

    };

    return (

        <MainLayout>

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Daily Planner

                </h1>

                <button

                    onClick={() => {

                        setSelectedPlanner(null);
                        setShowModal(true);

                    }}

                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"

                >

                    + Add Plan

                </button>

            </div>

            {/* Planner List */}

            {

                planners.length === 0 ?

                    (

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2 className="text-xl text-gray-300">

                                No Plans Found

                            </h2>

                        </div>

                    )

                    :

                    (

                        <div className="grid md:grid-cols-2 gap-6">

                            {

                                planners.map((planner) => (

                                    <PlannerCard

                                        key={planner.id}

                                        planner={planner}

                                    />

                                ))

                            }

                        </div>

                    )

            }

            {/* Add Planner Modal */}

            <AddPlannerModal

                isOpen={showModal}

                planner={selectedPlanner}

                onClose={() => {

                    setShowModal(false);

                    setSelectedPlanner(null);

                    loadPlanner();

                }}

            />

        </MainLayout>

    );

}

export default DailyPlanner;