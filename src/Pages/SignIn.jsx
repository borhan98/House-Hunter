import { useForm } from "react-hook-form";
import logo from "../assets/HouseHunterLogo2.png";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";


const SignIn = () => {
    const [showPass, setShowPass] = useState(true);
    const axiosPublic = useAxiosPublic();
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = userInfo => {
        axiosPublic.post("/login", userInfo)
            .then(res => {
                // console.log(res.data);
                if (res?.data?.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setUser(res.data.user);
                    navigate("/dashboard")
                    toast.success('Login Succesfull!',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                } else if (res.data.message) {
                    toast.error(`${res.data.message}`,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
    }

    return (
        <div className="bg-[#F89A20] min-h-screen">
            <div className="container mx-auto px-2 lg:px-0 py-20">
                <div className="shadow-xl mx-52 flex bg-white rounded-md overflow-hidden">
                    <div className="flex-1 px-10 py-20 flex flex-col items-center justify-center relative">
                        <figure>
                            <img className="opacity-10 absolute top-10 left-12" src={logo} alt="logo" />
                        </figure>
                        <h3 className="text-4xl mb-10 font-medium">Welcome Back!</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                            {/* Sign In button */}
                            <button
                                type="submit"
                                className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
                            >
                                Sign In
                            </button>
                        </form>
                        {/* Redirect to Register page */}
                        <p className="text-center mt-6">
                            New to HouseHunter?{" "}
                            <Link to={"/register"} className="text-[#F89A20] font-bold underline">
                                Sign Up Now
                            </Link>
                        </p>
                    </div>
                    <div className="flex-1 hero" style={{ backgroundImage: 'url(https://i.ibb.co/v1BWJq7/Login.jpg)' }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Your Home Awaits!</h1>
                                <p className="mb-5">Log in to Your Account for Quick Access to Your Saved Listings, Bookings, and Profile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;