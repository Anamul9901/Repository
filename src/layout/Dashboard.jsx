import { NavLink, Outlet } from "react-router-dom";
import Navber from "../components/Navber/Navber";
import Footer from "../components/Footer/Footer";



const Dashboard = () => {
    return (
        <div className=" ">
            <Navber />
            <div className="md:max-w-[1250px] mx-auto mt-2">
                {/* dashboard side bar */}
                <div className=" p-1 flex justify-center mb-2 w-64 rounded-full mx-auto  bg-green-600">
                    <ul className=" flex gap-5">
                        
                        <li>
                            <NavLink to='my-task' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'text-[#050506] underline font-black   ' : "text-white   font-bold"
                            }>My Task</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to='create-task' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'text-[#050506] underline font-black   ' : "text-white   font-bold"
                            }>Create Task</NavLink>
                        </li>
                        
                    </ul>
                </div>


                {/* dashboard content */}
                <div className="flex-1 md:h-[60vh]">

                    <Outlet />

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;