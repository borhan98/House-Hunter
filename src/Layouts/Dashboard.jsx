import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";


const Dashboard = () => {
    return (
        <div>
            <div className="container mx-auto px-2 lg:px-0 flex">
                <div className="w-2/12 bg-slate-900 min-h-screen  py-10">
                    <Sidebar />
                </div>
                <div className="w-10/12 py-10 px-4 overflow-x-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;