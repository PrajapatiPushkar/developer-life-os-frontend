function InternshipWidget({ internships }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-bold mb-4">

                💼 Recent Applications

            </h2>

            {

                internships.length === 0 ?

                    (

                        <p className="text-gray-400">

                            No Applications

                        </p>

                    )

                    :

                    internships.slice(0, 5).map(item => (

                        <div

                            key={item.id}

                            className="border-b border-slate-700 py-2"

                        >

                            <p className="font-semibold">

                                {item.companyName}

                            </p>

                            <p className="text-sm text-gray-400">

                                {item.status}

                            </p>

                        </div>

                    ))

            }

        </div>

    );

}

export default InternshipWidget;