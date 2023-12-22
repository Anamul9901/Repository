
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const DirectLogIn = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.data);
                navigate('/dashboard')
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div>
            <h2 className='text-center mt-6 mb-2'>Sign in with another account</h2>
            <div className=" flex justify-center text-2xl">
                <button onClick={handleGoogleLogIn}><FcGoogle /></button>
            </div>
        </div>
    );
};

export default DirectLogIn;