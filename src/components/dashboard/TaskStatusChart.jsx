import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const COLORS = ["#22c55e", "#ef4444"];

function TaskStatusChart({ completed, pending }) {

    const data = [
        {
            name: "Completed",
            value: completed
        },
        {
            name: "Pending",
            value: pending
        }
    ];

    return (

        <div className="bg-slate-800 p-6 rounded-xl">

            <h2 className="text-2xl font-bold mb-5">

                Task Status

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        outerRadius={100}

                    >

                        {

                            data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default TaskStatusChart;