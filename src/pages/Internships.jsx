import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import InternshipCard from "../components/internship/InternshipCard";

import {

    getAllInternships

} from "../services/internshipService";

function Internships() {

    const [internships, setInternships] = useState([]);

    useEffect(() => {

        loadInternships();

    }, []);

    const loadInternships = async () => {

        try {

            const response = await getAllInternships();

            setInternships(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <MainLayout>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Internship Tracker

                    </h1>

                    <p className="text-gray-400 mt-2">

                        Track all your internship applications.

                    </p>

                </div>

                <button

                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg"

                >

                    + Add Application

                </button>

            </div>

            {

                internships.length === 0 ?

                    (

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2>

                                No Applications Found

                            </h2>

                        </div>

                    )

                    :

                    (

                        <div className="grid md:grid-cols-2 gap-6">

                            {

                                internships.map((internship) => (

                                    <InternshipCard

                                        key={internship.id}

                                        internship={internship}

                                    />

                                ))

                            }

                        </div>

                    )

            }

        </MainLayout>

    );

}

export default Internships;