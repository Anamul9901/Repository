import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Banner = () => {
    const { user } = useAuth();
    return (
        <div>

            <div className="carousel w-full lg:h-[700px]">
                <div   className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/C6TGCMp/bacGam.jpg'} className='w-full  ' />

                    <div className="absolute flex    items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <div className=' md:space-y-6 pl-12'>
                            <h2 className="md:text-4xl text-2xl ml-10 font-bold">FREE
                                TASK TIME TRACKING</h2>

                            <h2 className='md:text-6xl text-center text-xl font-bold visible '><Link to={!user ? `/signin` : '/dashboard'}><button className="btn btn-sm btn-primary">Let’s Explore</button></Link></h2>

                        </div>
                        <div><img className="w-[50%] md:ml-32 ml-2" src={'https://i.ibb.co/CVLTqt8/Lovepik-com-832217352-Complete-task-25-D-vector-business-people-office-commercial-eleme.png'} alt="" /></div>
                    </div>
                    

                </div>
                <div>

                </div>
            </div>

        <div className="flex justify-center items-center">
        <div className="md:flex items-center gap-10 bg-gray-200 pb-20">
                <img className="md:w-[40%] p-5" src={'https://www.bitrix24.com/upload/optimizer/converted/images/content_en/product/tasks_and_projects/free_online_task_manager/img_why.png.webp?1701181440000'} alt="" />
                <div>
                    <h2 className="text-3xl font-bold pb-10">Why TASKMASTER?</h2>
                    <p className="pb-6">
                        When it comes down to choosing task time tracking freeware, <br /> all you need is three things:</p>
                        
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;