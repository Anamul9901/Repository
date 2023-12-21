
import { FcGoogle } from 'react-icons/fc';


const DirectLogIn = () => {

    const handleGoogleLogIn = () =>{
       
    }
    return (
        <div>
        <h2 className='text-center mt-6 mb-2'>Sign in with another account</h2>
        <div className=" flex justify-center text-2xl">
            <button onClick={handleGoogleLogIn}><FcGoogle/></button>
        </div>
    </div>
    );
};

export default DirectLogIn;