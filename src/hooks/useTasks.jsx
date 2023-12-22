import { useQuery } from "@tanstack/react-query";
import userAxiosPublic from "./userAxiosPublic";

 

const useTasks = () => {
    const axiosPulic = userAxiosPublic();
    const {data: allTasks = [], isPending: loading, refetch} = useQuery({
        queryKey: ['task'],
        queryFn: async () =>{
            const res = await axiosPulic.get('/tasks')
            return res.data;
        }
    })
    return [allTasks, loading, refetch]
};

export default useTasks;