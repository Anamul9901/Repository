import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

// import { DndProvider, useDrag } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'


const MyTask = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(res => {
                setTasks(res.data)
            })
            .catch(() => { })
    }, [])
    console.log(tasks);

    const filterWithEmail = tasks?.filter(task => task?.userEmail === user?.email)
    console.log(filterWithEmail)

    const filterToDo = filterWithEmail?.filter(task => task?.position === 'to-do')
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: "task",
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   }))

    //   console.log(isDragging);

    const filterOngoing = filterWithEmail?.filter(task => task?.position === 'ongoing')
    // console.log(filterOngoing);
    const filterCompleted = filterWithEmail?.filter(task => task?.position === 'completed')
    // console.log(filterCompleted);

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => { 
                 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `delete successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch(() => { })
        console.log(id)
    }

    const handleOngoing = id => {
        console.log(id)
        const newPosition = 'ongoing';
        const newData = { newPosition }
        axios.patch(`http://localhost:5000/tasks/${id}`, newData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleCompleted = id => {
        console.log(id)
        const newPosition = 'completed';
        const newData = { newPosition }
        axios.patch(`http://localhost:5000/tasks/${id}`, newData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleToDo = id => {
        console.log(id)
        const newPosition = 'to-do';
        const newData = { newPosition }
        axios.patch(`http://localhost:5000/tasks/${id}`, newData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }



    return (
        // <DndProvider backend={HTML5Backend}>
        <div className="md:flex justify-between">

            <div className="bg-red-300 flex-1">
                <h2 className="text-center text-xl font-bold pb-2">To-Do</h2>
                <hr />
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
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
                                                <div className="flex">
                                                    <div>
                                                        <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                        <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                            <FaEdit />
                                                        </Link>
                                                    </div>

                                                    <div >
                                                        <div className="pb-2">
                                                            <button className="bg-yellow-600   rounded-md font-bold text-white px-1" onClick={() => handleOngoing(task._id)}>Ongoing</button>
                                                        </div>
                                                        <div>
                                                            <button className="bg-green-600   rounded-md font-bold text-white px-1" onClick={() => handleCompleted(task._id)}>Completed</button>
                                                        </div>
                                                    </div>

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
                <h2 className="text-center text-xl font-bold pb-2">Ongoing</h2>
                <hr />
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
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
                                                <div className="flex">
                                                    <div>
                                                        <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                        <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                            <FaEdit />
                                                        </Link>
                                                    </div>

                                                    <div >
                                                        <div className="pb-2">
                                                            <button className="bg-red-600   rounded-md font-bold text-white px-1" onClick={() => handleToDo(task._id)}>To-do</button>
                                                        </div>
                                                        <div>
                                                            <button className="bg-green-600   rounded-md font-bold text-white px-1" onClick={() => handleCompleted(task._id)}>Completed</button>
                                                        </div>
                                                    </div>
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
                <h2 className="text-center text-xl font-bold pb-2">Completed</h2>
                <hr />
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
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
                                                <div className="flex">
                                                    <div>
                                                        <button onClick={() => handleDelete(task._id)} className=" text-xl text-red-600"><AiFillDelete /></button>
                                                        <Link to={`/dashboard/update-task/${task._id}`} className=" text-xl ml-2 text-green-600">
                                                            <FaEdit />
                                                        </Link>
                                                    </div>

                                                    <div >
                                                    <div className="pb-2">
                                                            <button className="bg-red-600   rounded-md font-bold text-white px-1" onClick={() => handleToDo(task._id)}>To-do</button>
                                                        </div>
                                                        <div className="pb-2">
                                                            <button className="bg-yellow-600   rounded-md font-bold text-white px-1" onClick={() => handleOngoing(task._id)}>Ongoing</button>
                                                        </div>
                                                    </div>
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
        // </DndProvider>
    );
};

export default MyTask;