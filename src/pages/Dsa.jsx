import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProblemStatistics from "../components/dsa/ProblemStatistics";
import ProblemCard from "../components/dsa/ProblemCard";

import {
    getAllProblems,
    getStatistics
} from "../services/problemService";

function Dsa() {

    const [problems, setProblems] = useState([]);

    const [statistics, setStatistics] = useState({

        totalProblems:0,
        solvedProblems:0,
        unsolvedProblems:0,
        easyProblems:0,
        mediumProblems:0,
        hardProblems:0

    });

    useEffect(() => {

        loadProblems();

        loadStatistics();

    }, []);

    const loadProblems = async () => {

        try{

            const response = await getAllProblems();

            setProblems(response.data);

        }

        catch(error){

            console.error(error);

        }

    };

    const loadStatistics = async ()=>{

        try{

            const response = await getStatistics();

            setStatistics(response.data);

        }

        catch(error){

            console.error(error);

        }

    };

    return (

        <MainLayout>

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
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold"
                >
                    + Add Problem
                </button>

            </div>

            <ProblemStatistics statistics={statistics}/>

            {

                problems.length===0 ?

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

                            problems.map(problem=>(

                                <ProblemCard

                                    key={problem.id}

                                    problem={problem}

                                />

                            ))

                        }

                    </div>

                )

            }

        </MainLayout>

    );

}

export default Dsa;