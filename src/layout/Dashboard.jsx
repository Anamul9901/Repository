import { NavLink, Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";



const Dashboard = () => {
    return (
        <div className="">
            <Navber />
            <div className="max-w-[1250px] mx-auto flex">
                {/* dashboard side bar */}
                <div className="w-64 pt-6 min-h-screen bg-green-400">
                    <ul className="menu">
                        <li>
                            <NavLink to="/dashboard">

                                Dashboard</NavLink>
                        </li>
                    </ul>
                </div>


                {/* dashboard content */}
                <div className="flex-1">
                    
                    <Outlet />
                    
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;