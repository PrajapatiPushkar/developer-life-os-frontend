function InternshipCard({

    internship,

    onEdit,

    onDelete

}) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold text-cyan-400">

                {internship.companyName}

            </h2>

            <div className="space-y-2 mt-4">

                <p><strong>Role:</strong> {internship.role}</p>

                <p><strong>Status:</strong> {internship.status}</p>

                <p><strong>Location:</strong> {internship.location}</p>

                <p><strong>Deadline:</strong> {internship.deadline}</p>

            </div>

            <div className="flex gap-3 mt-6">

                <button

                    onClick={() => onEdit(internship)}

                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 py-2 rounded"

                >

                    Edit

                </button>

                <button

                    onClick={() => onDelete(internship.id)}

                    className="flex-1 bg-red-500 hover:bg-red-600 py-2 rounded"

                >

                    Delete

                </button>

            </div>

        </div>

    );

}

export default InternshipCard;