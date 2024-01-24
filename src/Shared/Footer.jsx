import { FaFacebookF, FaGooglePlus, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/HouseHunterLogo2.png";


const Footer = () => {
    return (
        <div className="mt-10">
            <div className="bg-[#272822] py-10">
                <div className="container mx-auto px-2 md:px-1 overflow-hidden flex flex-col items-center gap-4">
                    <h2>
                        <Link
                            to={"/"}
                            className="tracking-tighter md:tracking-normal text-lg md:text-4xl font-bold leading-10 text-[#DDD]"
                        >
                            <img src={logo} alt="" />
                        </Link>
                    </h2>
                    <p
                        className="max-w-[800px] mx-auto text-center text-sm md:text-base text-[#DDD]"
                    >
                        Unlock the Door to Your Next Home: Empowering House Owners and Renters Alike. Welcome to Effortless House Rentals, Where Your Space Finds Its Perfect Match!
                    </p>
                    <h2
                        className="text-lg md:text-xl lg:text-2xl font-bold text-[#DDD] mt-2 border-b"
                    >
                        Follow Us On
                    </h2>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-6 md:w-7 lg:w-10 h-6 md:h-7 lg:h-10 rounded-full bg-transparent hover:bg-[#FFF] border border-[#FFF] duration-300 flex justify-center items-center text-white hover:text-[#2B3440] text-base lg:text-xl"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="w-6 md:w-7 lg:w-10 h-6 md:h-7 lg:h-10 rounded-full bg-transparent hover:bg-[#FFF] border border-[#FFF] duration-300 flex justify-center items-center text-white hover:text-[#2B3440] text-base lg:text-xl"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="w-6 md:w-7 lg:w-10 h-6 md:h-7 lg:h-10 rounded-full bg-transparent hover:bg-[#FFF] border border-[#FFF] duration-300 flex justify-center items-center text-white hover:text-[#2B3440] text-base lg:text-xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="w-6 md:w-7 lg:w-10 h-6 md:h-7 lg:h-10 rounded-full bg-transparent hover:bg-[#FFF] border border-[#FFF] duration-300 flex justify-center items-center text-white hover:text-[#2B3440] text-base lg:text-xl"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="w-6 md:w-7 lg:w-10 h-6 md:h-7 lg:h-10 rounded-full bg-transparent hover:bg-[#FFF] border border-[#FFF] duration-300 flex justify-center items-center text-white hover:text-[#2B3440] text-base lg:text-xl"
                        >
                            <FaGooglePlus />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 bg-[#0e0f0d] text-[#b9b8b8] py-6 shadow-2xl drop-shadow-2xl">
                <small>
                    Copyright &copy;2023 All Rights:{" "}
                    <a className="underline" href="#">
                        HouseHunter
                    </a>
                </small>
            </div>
        </div>
    );
};

export default Footer;