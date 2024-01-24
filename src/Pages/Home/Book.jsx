import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/HouseHunterLogo2.png"
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Book = () => {
    const house = useLoaderData();
    const { _id, photo, name, description } = house;
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = bookingInfo => {
        if (!user) {
            navigate("/signin")
            return toast.error('You have to login to book house!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
        if (user?.role === "owner") {
            return toast.error('You can\'t book houce, because yor are an owner!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
        
        const bookingHouse = {
            user_name: user?.name,
            email: user?.email,
            phone: bookingInfo.phone,
            house_id: _id
        }
        axiosSecure.post("/bookings", bookingHouse)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Booking successfull!',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
                if (res.data.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${res.data.message}`,
                    });
                }
            })
    }

    return (
        <div className="bg-[#F89A20] min-h-screen">
            <div className="container mx-auto px-2 lg:px-0 py-32">
                <div className="shadow-xl mx-52 flex bg-white rounded-md overflow-hidden">
                    <div className="flex-1 px-10 py-20 flex flex-col items-center justify-center relative">
                        <figure>
                            <img className="opacity-10 absolute top-10 left-12" src={logo} alt="logo" />
                        </figure>
                        <h3 className="text-4xl mb-10 font-medium">Booking new House!</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            {/* Name Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="name">Your name</label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    defaultValue={user?.name}
                                    className="py-3 px-4 w-full text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none cursor-not-allowed "
                                    id="name" disabled
                                />
                            </div>
                            {/* Email Field */}
                            <div className="flex flex-col space-y-2 mb-4">
                                <label htmlFor="email">Your email</label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    defaultValue={user?.email}
                                    className="py-3 px-4 w-full text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none cursor-not-allowed "
                                    id="email" disabled
                                />
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
                                    className="py-3 px-4 w-full text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                                    id="phone"
                                />
                                {errors.phone && (
                                    <span className="text-red-500">Please input a valid phone number*</span>
                                )}
                            </div>
                            {/* Submit booking button */}
                            <button
                                type="submit"
                                className="py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest "
                            >
                                Submit Booking
                            </button>
                        </form>
                    </div>
                    <div className="flex-1 hero" style={{ backgroundImage: `url(${photo})` }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                                <p className="mb-5">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;