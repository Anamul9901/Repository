
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGithub } from "react-icons/fa6";


const DirectLogIn = () => {
    const { googleSignIn, githubSignin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(() => {
                // console.log(res.data);
                navigate('/dashboard')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "LogIn successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                // console.error(err);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "There is a problem",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleGithubLogIn = () => {
        githubSignin()
            .then(() => {
                // console.log(res.data);
                navigate('/dashboard')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "LogIn successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                // console.error(err);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "There is a problem",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <h2 className='text-center mt-6 mb-2'>Sign in with another account</h2>
            <div className=" flex justify-center text-2xl gap-6">
                <button onClick={handleGoogleLogIn}><FcGoogle /></button>
                <button onClick={handleGithubLogIn}><FaGithub /></button>
            </div>
        </div>
    );
};

export default DirectLogIn;