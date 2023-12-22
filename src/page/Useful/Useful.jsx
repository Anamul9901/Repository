import './Useful.css'

const Useful = () => {
    return (
        <div className='styleUseful'>
            <div className=" text-white max-w-[1250px] mx-auto h-[93vh]">
             <h2 className='text-3xl font-bold text-center pt-20 py-6 uppercase'>This website useful for action-takers.</h2>

            <div className='flex justify-around '>
            <div className='md:flex justify-around gap-10 pt-20'>
                <div className='bg-blue-600 w-52 h-20 flex justify-center items-center rounded-lg'>
                    <h2 className='text-center text-2xl font-bold  '>Students</h2>
                </div>
                <div className='bg-blue-600 w-52 my-10 md:my-0 h-20 flex justify-center items-center rounded-lg '>
                    <h2 className='text-center text-2xl font-bold  '>Developers</h2>
                </div>
                <div className='bg-blue-600 w-52 h-20 flex justify-center items-center rounded-lg'>
                    <h2 className='text-center text-2xl font-bold  '>Bankers</h2>
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Useful;