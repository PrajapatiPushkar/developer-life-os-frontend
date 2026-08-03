function ProgressCard({ progress }) {

    return (

        <div className="bg-slate-800 rounded-xl p-6">

            <h2 className="text-2xl font-bold">

                Overall Progress

            </h2>

            <div className="w-full bg-slate-700 rounded-full h-5 mt-6">

                <div

                    className="bg-cyan-500 h-5 rounded-full"

                    style={{
                        width: `${progress}%`
                    }}

                />

            </div>

            <p className="mt-4 text-xl">

                {progress.toFixed(1)}%

            </p>

        </div>

    );

}

export default ProgressCard;