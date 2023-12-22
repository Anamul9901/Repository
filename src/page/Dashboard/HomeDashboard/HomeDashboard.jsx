import useAuth from "../../../hooks/useAuth";

 

const HomeDashboard = () => {
    const {user} = useAuth();
    return (
        <div className="md:flex justify-center  gap-4 h-[70vh] pt-10">
        <div>
        <h2 className="md:text-3xl text-xl font-bold text-center">
            Welcome
            
            
        
            {user &&
                ` ${user.displayName}`
            }
        </h2>
        <p className="flex justify-center pt-10">
            <img className="w-40 rounded-xl" src={user?.photoURL} alt="" />
        </p>
            <h2 className="text-center pt-2">{user?.email}</h2>
        </div>
        
    </div>
    );
};

export default HomeDashboard;