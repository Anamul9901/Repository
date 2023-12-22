import axios from "axios";


const axiosPulic = axios.create({
    baseURL: 'https://job-task-server-sandy-pi.vercel.app',
    withCredentials: true
})

const userAxiosPublic = () => {
    return axiosPulic;
};

export default userAxiosPublic;