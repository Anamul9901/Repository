import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

        <div className="carousel w-full lg:h-[00px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/7N1c7bm/libr-3.jpg'} className='w-full rounded-xl' />

                <div className="absolute rounded-xl flex w-1/2  items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <div className='w-1/2 md:space-y-6 pl-12'>
                        <div>
                            <div className="items-center flex flex-col-reverse">
                                <p className="md:text-xl text-center">TC-Library </p>
                                <img className="lg:w-[40%] md:w-[70%] w-[60%]" src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2022/01/Logo2-1-160x164.png'} alt="" />
                            </div>
                        </div>
                        <Link to="/signin">
                        <h2 className='md:text-3xl text-xl font-bold visible pt-5'><button className="btn  btn-primary">Let’s Explore</button></h2></Link>

                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/PhVQdTn/elibrary-1.jpg'} className='w-full rounded-xl' />

                <div className="absolute rounded-xl flex w-1/2  items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <div className='w-1/2 md:space-y-6 pl-12'>
                        <div>
                            <div className="items-center flex flex-col-reverse">
                                <p className="md:text-xl text-center">TC-Library </p>
                                <img className="lg:w-[40%] md:w-[70%] w-[60%]" src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2022/01/Logo2-1-160x164.png'} alt="" />
                            </div>
                        </div>
                        <h2 className='md:text-6xl text-xl font-bold visible pt-5'>Be a <span className="text-pink-500">Builder</span></h2>

                    </div>
                </div>


                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/nk4sJBJ/lib-5.jpg'} className='w-full rounded-xl' />

                <div className="absolute rounded-xl flex w-1/2  items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <div className='w-1/2 md:space-y-6 pl-12'>
                        <div>
                            <div className="items-center flex flex-col-reverse">
                                <p className="md:text-xl text-center">TC-Library </p>
                                <img className="lg:w-[40%] md:w-[70%] w-[60%]" src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2022/01/Logo2-1-160x164.png'} alt="" />
                            </div>
                        </div>
                        <h2 className='md:text-6xl text-xl font-bold visible pt-5'>Be a <span className="text-pink-500">Builder</span></h2>

                    </div>
                </div>


                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/ngzmqw8/lib-4.jpg'} className='w-full rounded-xl' />

                <div className="absolute rounded-xl flex w-1/2  items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                    <div className='w-1/2 md:space-y-6 pl-12'>
                        <div>
                            <div className="items-center flex flex-col-reverse">
                                <p className="md:text-xl text-center">TC-Library </p>
                                <img className="lg:w-[40%] md:w-[70%] w-[60%]" src={'https://www.tejgaoncollege.edu.bd/wp-content/uploads/2022/01/Logo2-1-160x164.png'} alt="" />
                            </div>
                        </div>
                        <h2 className='md:text-6xl text-xl font-bold visible pt-5'>Be a <span className="text-pink-500">Builder</span></h2>

                    </div>
                </div>


                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

            
        </div>
    </div>
    );
};

export default Banner;