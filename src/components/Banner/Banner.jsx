import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Banner = () => {
    const {user} = useAuth();
    return (
        <div>

            <div className="carousel w-full lg:h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/C6TGCMp/bacGam.jpg'} className='w-full  ' />

                    <div className="absolute flex    items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <div className=' md:space-y-6 pl-12'>
                            <h2 className="text-4xl ml-10 font-bold">FREE
                                TASK TIME TRACKING</h2>

                            <h2 className='md:text-6xl text-center text-xl font-bold visible '><Link to={!user ?`/signin` : '/dashboard'}><button className="btn btn-primary">Let’s Explore</button></Link></h2>

                        </div>
                    </div>

                </div>
                <div>
                     
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Banner;