import { NavLink, Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";



const Dashboard = () => {
    return (
        <div className="">
            <Navber />
            <div className="max-w-[1250px] mx-auto  ">
                {/* dashboard side bar */}
                <div className=" p-2 flex justify-center  bg-green-400">
                    <ul className=" flex gap-5">
                        <li>
                            <NavLink to="/dashboard">

                                Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="my-task">

                                My Task</NavLink>
                        </li>
                        <li>
                            <NavLink to="create-task">

                                Create Task</NavLink>
                        </li>
                    </ul>
                </div>


                {/* dashboard content */}
                <div className="flex-1 p-6">
                    
                    <Outlet />
                    
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;