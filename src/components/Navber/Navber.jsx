import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Navber = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useAuth();

    // console.log(user)
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            })
            .catch()
    }

    const navitem = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "lg:text-white text-[#3da5e5] font-bold md:text-xl"
            }>Home</NavLink>
        </li>

        {
            user &&
            <li>
                <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "lg:text-white text-[#3da5e5] font-bold md:text-xl"
                }>Dashboard</NavLink>
            </li>
        }

        <li>
            <NavLink to='/useful' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? 'text-[#050506] underline font-black md:text-xl ' : "lg:text-white text-[#3da5e5] font-bold md:text-xl"
            }>Useful for</NavLink>
        </li>




    </>


    return (
        <div className="bg-[#0b4a6cde] text-white">
            <div className='max-w-[1300px] mx-auto w-full'>
                <div className="navbar   ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navitem}
                            </ul>
                        </div>
                        <Link to='/'>
                            <div className="flex items-center">
                                <h2 className="font-bold md:text-xl uppercase">Taskmaster</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navitem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ?
                            <div className="flex items-center">
                                <div className="flex flex-row-reverse items-center">

                                    <div>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="">
                                        <span className="text-xs md:text-lg font-bold">
                                            {user?.displayName}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className=" ">
                                    <LuLogOut className="text-2xl" />
                                </button>
                            </div>
                            :
                            <Link to='/signin'>
                                <button className="btn btn-sm bg-white hover:text-[#080403] text-black font-bold">Log In</button>
                            </Link>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;