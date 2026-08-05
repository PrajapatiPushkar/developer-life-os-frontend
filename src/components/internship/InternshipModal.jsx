import { useEffect, useState } from "react";
import Modal from "react-modal";

import {
    createInternship,
    updateInternship
} from "../../services/internshipService";

Modal.setAppElement("#root");

function InternshipModal({

    isOpen,
    onClose,
    internship

}) {

    const initialState = {

        companyName: "",

        role: "",

        location: "",

        applicationDate: "",

        deadline: "",

        status: "APPLIED",

        jobLink: "",

        salary: "",

        notes: ""

    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {

        if (internship) {

            setFormData(internship);

        } else {

            setFormData(initialState);

        }

    }, [internship, isOpen]);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (internship) {

                await updateInternship(

                    internship.id,

                    formData

                );

                alert("Application Updated");

            } else {

                await createInternship(formData);

                alert("Application Added");

            }

            onClose();

        }

        catch (error) {

            console.error(error);

            alert("Operation Failed");

        }

    };

    return (

        <Modal

            isOpen={isOpen}

            onRequestClose={onClose}

            className="bg-slate-900 text-white w-[650px] p-8 rounded-xl mx-auto mt-10"

            overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start"

        >

            <h2 className="text-3xl font-bold mb-6">

                {internship ?

                    "Update Application"

                    :

                    "Add Application"}

            </h2>

            <form

                onSubmit={handleSubmit}

                className="space-y-4"

            >

                <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                >

                    <option>APPLIED</option>
                    <option>ONLINE_ASSESSMENT</option>
                    <option>INTERVIEW</option>
                    <option>HR_ROUND</option>
                    <option>SELECTED</option>
                    <option>REJECTED</option>
                    <option>OFFER_ACCEPTED</option>

                </select>

                <input
                    type="text"
                    name="jobLink"
                    placeholder="Job Link"
                    value={formData.jobLink}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <div className="flex gap-4">

                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded"
                    >
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </Modal>

    );

}

export default InternshipModal;