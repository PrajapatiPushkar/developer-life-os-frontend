import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

function TaskOverviewChart({ summary }) {

    const data = [

        {
            name: "Tasks",
            value: summary.totalTasks
        },

        {
            name: "Completed",
            value: summary.completedTasks
        },

        {
            name: "Pending",
            value: summary.pendingTasks
        },

        {
            name: "High",
            value: summary.highPriorityTasks
        }

    ];

    return (

        <div className="bg-slate-800 p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-5">

                Overview

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>

                    <XAxis dataKey="name"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar dataKey="value"/>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default TaskOverviewChart;