import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyTask = () => {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => {
                setTasks(res.data)
            })
            .catch(() => { })
    }, [])
    console.log(tasks);

    const filterToDo = tasks.filter(task => task.position === 'to-do')
    // console.log(filterToDo);
    const filterOngoing = tasks.filter(task => task.position === 'ongoing')
    // console.log(filterOngoing);
    const filterCompleted = tasks.filter(task => task.position === 'completed')
    // console.log(filterCompleted);

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => { })
            .catch(() => { })
        console.log(id)
    }

     

    return (
        <div className="md:flex justify-between">

            <div className="bg-red-300 flex-1">
                <h2 className="text-center">To-Do</h2>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Dadline</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterToDo.map((task, ind) =>
                                        <tr key={task._id}>
                                            <th>{ind + 1}</th>
                                            <td>{task.name}</td>
                                            <td>{task.dadline}</td>
                                            <td>
                                                <div>
                                                    <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                    <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div className="bg-yellow-300 flex-1 mt-6 md:mt-0">
                <h2 className="text-center">Ongoing</h2>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Dadline</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterOngoing.map((task, ind) =>
                                        <tr key={task._id}>
                                            <th>{ind + 1}</th>
                                            <td>{task.name}</td>
                                            <td>{task.dadline}</td>
                                            <td>
                                                <div>
                                                    <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                    <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div className="bg-green-300 flex-1 mt-6 md:mt-0">
                <h2 className="text-center">Completed</h2>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Dadline</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCompleted.map((task, ind) =>
                                        <tr key={task._id}>
                                            <th>{ind + 1}</th>
                                            <td>{task.name}</td>
                                            <td>{task.dadline}</td>
                                            <td>
                                                <div>
                                                    <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                    <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                        <FaEdit />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MyTask;