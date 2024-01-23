import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/HouseHunterLogo2.png";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const SignUp = () => {
    const [showPass, setShowPass] = useState(true);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = userInfo => {
        axiosSecure.post("/register", userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast('Registration Succesfull!',
                        {
                            icon: '👏',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                    navigate('/signin');
                } else {
                    toast.error(`${res.data.message}, Please login`,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            }
                        }
                    );
                    navigate('/signin');
                }
            })
    }

    return (
        <div className="bg-[#F89A20] min-h-screen">
            <div className="container mx-auto px-2 lg:px-0 py-10">
                <div className="shadow-xl mx-52 flex bg-white rounded-md overflow-hidden">
                    <div className="flex-1 p-10 flex flex-col items-center justify-center relative">
                        <figure>
                            <img className="opacity-10 absolute top-10 left-12" src={logo} alt="logo" />
                        </figure>
                        <h3 className="text-4xl mb-10 font-medium">Join HouseHunter!</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            {/* Full name Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="name">Your full name</label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                                    id="name"
                                />
                                {errors.name && (
                                    <span className="text-red-500">Your name is required*</span>
                                )}
                            </div>
                            {/* Phone number Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="phone">Your phone number</label>
                                <input
                                    {...register("phone", {
                                        required: true, pattern: /^(\+88)?01[3-9]\d{8}$/
                                    })}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                                    id="phone"
                                />
                                {errors.phone && (
                                    <span className="text-red-500">Please input a valid Bangladeshi phone number*</span>
                                )}
                            </div>
                            {/* Select role Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="role">Select your role</label>
                                <select className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("role", { required: true })}>
                                    <option value="" className="text-slate-400" >Select an Option</option>
                                    <option value="owner">House Owner</option>
                                    <option value="renter">House Renter</option>
                                </select>
                                {errors.role && (
                                    <span className="text-red-500">Your role is required*</span>
                                )}
                            </div>
                            {/* Email Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="email">Your email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                                    id="email"
                                />
                                {errors.email && (
                                    <span className="text-red-500">Your email is required*</span>
                                )}
                            </div>
                            {/* Password Field */}
                            <div className="relative flex flex-col space-y-2">
                                <label htmlFor="password">Your password</label>
                                <input
                                    {...register("password", { required: true, minLength: 6 })}
                                    type={showPass ? "password" : "text"}
                                    placeholder="Enter your password"
                                    className="py-3 px-4 w-full text-black bg-white rounded-md shadow focus:shadow-xl focus:outline-none "
                                    id="password"
                                />
                                {errors.password && (
                                    <span className="text-red-500">
                                        Password must have at least 6 character*
                                    </span>
                                )}
                                {/* Show Password */}
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute top-10 right-2 text-black text-xl"
                                >
                                    {showPass ? <IoEye /> : <IoEyeOff />}
                                </span>
                                <a className="block text-right underline" href="#">
                                    <small>Forgot Password?</small>
                                </a>
                            </div>
                            {/* Sign Up button */}
                            <button
                                type="submit"
                                className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
                            >
                                Sign Up
                            </button>
                        </form>
                        {/* Redirect to Register page */}
                        <p className="text-center mt-6">
                            Already have an account?{" "}
                            <Link to={"/signin"} className="text-[#F89A20] font-bold underline">
                                Sign In Now
                            </Link>
                        </p>
                    </div>
                    <div className="flex-1 hero" style={{ backgroundImage: 'url(https://i.ibb.co/v1BWJq7/Login.jpg)' }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Find Your Dream Home Today!</h1>
                                <p className="mb-5">Create an Account to Access Exclusive Listings, Save Favorites, and Experience Seamless Renting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;