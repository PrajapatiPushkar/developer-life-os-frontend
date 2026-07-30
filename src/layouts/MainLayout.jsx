import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {

    return (

        <div className="bg-slate-950 min-h-screen">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-8 text-white">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default MainLayout;