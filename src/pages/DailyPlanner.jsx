import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import PlannerCard from "../components/planner/PlannerCard";
import { getAllPlanners } from "../services/plannerService";

function DailyPlanner() {

    const [planners, setPlanners] = useState([]);

    useEffect(() => {

        loadPlanner();

    }, []);

    const loadPlanner = async () => {

        try {

            const response = await getAllPlanners();

            setPlanners(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Daily Planner

                </h1>

                <button

                    className="bg-cyan-500 px-5 py-3 rounded-lg"

                >

                    + Add Plan

                </button>

            </div>

            {

                planners.length === 0 ?

                    (

                        <h2>No Plans Found</h2>

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

        </MainLayout>

    );

}

export default DailyPlanner;