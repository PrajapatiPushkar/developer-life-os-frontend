function InternshipCard({ internship }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold text-cyan-400">

                {internship.companyName}

            </h2>

            <div className="space-y-2 mt-4">

                <p>

                    <strong>Role:</strong>

                    {internship.role}

                </p>

                <p>

                    <strong>Status:</strong>

                    {internship.status}

                </p>

                <p>

                    <strong>Location:</strong>

                    {internship.location}

                </p>

                <p>

                    <strong>Deadline:</strong>

                    {internship.deadline}

                </p>

            </div>

        </div>

    );

}

export default InternshipCard;