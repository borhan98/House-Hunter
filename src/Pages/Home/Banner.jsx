import { HiOutlineArrowLongDown } from "react-icons/hi2";


const Banner = () => {
    return (
        <div className="hero h-[100vh] min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/D4dLZhM/banner-bg2.jpg)' }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-5 text-xl font-bold">Find Your</p>
                    <h1 className="mb-5 text-6xl">
                        Dream Home
                        <span className="text-xl"> with </span>
                        <span className="text-[#F89A20]">HouseHunter</span>
                    </h1>
                    <p>
                        Empowering Your Home Search – HouseHunter, Where Choices Abound
                    </p>
                    <a href="#" className="scroll-arrow inline-block"><HiOutlineArrowLongDown className="text-5xl" /></a>
                    <p className="mt-6 tracking-widest">Scroll</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;