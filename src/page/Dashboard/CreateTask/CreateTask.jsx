import axios from "axios";


const CreateTask = () => {

    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const priority = form.priority.value;
        const dadline = form.dadline.value;
        const description = form.description.value;
        const position = 'to-do'
        console.log(name, title, priority, dadline, description)

        const taskInfo = { name, title, priority, dadline, description, position }

        axios.post('http://localhost:5000/tasks', taskInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div className="styleAddProduct   min-h-screen pt-10">
            <div className="max-w-[1300px] mx-auto  p-3 flex justify-center">
                <div className="card text-black bg-pink-200 w-full md:w-1/2 shadow-2xl pb-12 px-2">
                    <h2 className="text-center text-3xl font-bold mb-6 pt-10 pb-6">Create New Task</h2>
                    <div className="flex justify-center">
                        <form onSubmit={handleAddTask}>
                            <div className="">
                                <div className="md:flex gap-5 mb-5">
                                    <div className="w-full">
                                        <h2>Name</h2>
                                        <input type="text" name="name" placeholder="Name"
                                            required className="input input-bordered w-full" />
                                    </div>
                                    <div className="w-full">
                                        <h2>Title</h2>
                                        <input type="img" name="title" placeholder="Tite"
                                            required
                                            className="input input-bordered  w-full" />
                                    </div>

                                </div>

                                <div className="md:flex gap-5  mb-5">
                                    <div className="w-full">
                                        <h2>Priority</h2>
                                        <select name="priority"
                                            required className="select select-bordered w-full">
                                            <option disabled selected>Priority</option>
                                            <option>Low</option>
                                            <option>Moderate</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <h2>Dadline</h2>
                                        <input type="date" name="dadline" required placeholder="Author Name" className="input input-bordered w-full  " />
                                    </div>
                                </div>



                                <div className="flex gap-5  mb-5">

                                    <div className="w-full">
                                        <h2>Description</h2>
                                        <input type="text" name="description" placeholder="Description" required className="input input-bordered w-full " />
                                    </div>
                                </div>
                                <button type="submit" className="btn glass w-full bg-pink-500 font-bold hover:text-[#EC7755]">S u b m i t</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;