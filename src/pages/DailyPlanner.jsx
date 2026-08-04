import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddPlannerModal from "../components/planner/AddPlannerModal";
import PlannerProgress from "../components/planner/PlannerProgress";
import PlannerSection from "../components/planner/PlannerSection";

import {
    getAllPlanners,
    deletePlanner,
    togglePlanner
} from "../services/plannerService";

function DailyPlanner() {

    const [planners, setPlanners] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanner, setSelectedPlanner] = useState(null);

    // Group planners by time slot
    const morningPlans = planners.filter(
        (p) => p.timeSlot === "MORNING"
    );

    const afternoonPlans = planners.filter(
        (p) => p.timeSlot === "AFTERNOON"
    );

    const eveningPlans = planners.filter(
        (p) => p.timeSlot === "EVENING"
    );

    const nightPlans = planners.filter(
        (p) => p.timeSlot === "NIGHT"
    );

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

    // Edit Planner
    const handleEdit = (planner) => {

        setSelectedPlanner(planner);

        setShowModal(true);

    };

    // Delete Planner
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this planner?"
        );

        if (!confirmDelete) return;

        try {

            await deletePlanner(id);

            alert("Planner Deleted Successfully 🎉");

            loadPlanner();

        } catch (error) {

            console.error(error);

            alert("Failed to delete planner");

        }

    };

    // Toggle Complete
    const handleToggle = async (id) => {

        try {

            await togglePlanner(id);

            loadPlanner();

        } catch (error) {

            console.error(error);

            alert("Failed to update planner");

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

            {/* Progress */}

            <PlannerProgress planners={planners} />

            {/* Planner Sections */}

            {

                planners.length === 0 ? (

                    <div className="bg-slate-800 rounded-xl p-8 text-center">

                        <h2 className="text-xl text-gray-300">

                            No Plans Found

                        </h2>

                    </div>

                ) : (

                    <>

                        <PlannerSection
                            title="Morning"
                            icon="🌅"
                            planners={morningPlans}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />

                        <PlannerSection
                            title="Afternoon"
                            icon="☀️"
                            planners={afternoonPlans}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />

                        <PlannerSection
                            title="Evening"
                            icon="🌆"
                            planners={eveningPlans}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />

                        <PlannerSection
                            title="Night"
                            icon="🌙"
                            planners={nightPlans}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggle={handleToggle}
                        />

                    </>

                )

            }

            {/* Add / Edit Modal */}

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