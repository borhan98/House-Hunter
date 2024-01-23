import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


const image_api_key = import.meta.env.VITE_IMAGE_API_KEY;
// const image_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`;
const image_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`;


const AddHouse = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle add new house
    const onSubmit = (houseInfo, e) => {
        // Upload image to image server
        const image_file = { image: houseInfo.photo[0] };
        axiosPublic.post(image_api, image_file, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            if (res.data.success) {
                const newHouse = {
                    name: houseInfo.name,
                    address: houseInfo.address,
                    city: houseInfo.city,
                    bedrooms: parseInt(houseInfo.bedrooms),
                    bathrooms: parseInt(houseInfo.bathrooms),
                    room_size: houseInfo.room_size,
                    availability_date: houseInfo.availability_date,
                    rent_per_month: parseFloat(houseInfo.rent_per_month),
                    phone: houseInfo.phone,
                    description: houseInfo.description,
                    photo: res.data.data.display_url,
                    email: user?.email,
                    user_name: user?.name
                }

                // Upload a new house
                axiosSecure.post("/houses", newHouse)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            toast.success('Successfully added the house!',
                                {
                                    style: {
                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff',
                                    },
                                }
                            );
                            e.target.reset();
                        }
                    })
            }
        })

    }

    return (
        <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
            <Helmet>
                <title>HouseHunter | Add House</title>
            </Helmet>
            <h3 className="text-3xl text-center mb-10">Add a new House</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Row 1 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* House name */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="name">House name</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none " placeholder="Enter your house name"
                                id="name"
                            />
                            {errors.name && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                        {/* Address */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="address">House address</label>
                            <input
                                {...register("address", { required: true })}
                                type="text"
                                placeholder="Enter house address"
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="address"
                            />
                            {errors.address && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* City */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="city">City</label>
                            <input
                                {...register("city", { required: true })}
                                type="text"
                                placeholder="Enter the city"
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="city"
                            />
                            {errors.city && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                        {/* Room size */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="room_size">Room size</label>
                            <select className="py-3 px-4 w-full text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("room_size", { required: true })}>
                                <option value="" className="text-slate-400" >Select an Option</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                            {errors.room_size && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* Bedrooms */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="bedrooms">How many bedrooms?</label>
                            <select className="py-3 px-4 w-full text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("bedrooms", { required: true })}>
                                <option value="" className="text-slate-400" >Select an Option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            {errors.bedrooms && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                        {/* Bathrooms */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="bathrooms">How many bathroom?</label>
                            <select className="py-3 px-4 w-full text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("bathrooms", { required: true })}>
                                <option value="" className="text-slate-400" >Select an Option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            {errors.bathrooms && (
                                <span className="text-red-500">This field is required*</span>
                            )}
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* Rent per month */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="rent_per_month">Rent per month</label>
                            <input
                                type="text"
                                {...register("rent_per_month", { required: true, pattern: /^\d+(\.\d+)?$/ })}
                                placeholder="Enter rent per month"
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="rent_per_month"
                            />
                            {errors.rent_per_month && (
                                <span className="text-red-500">Please input a valid number*</span>
                            )}
                        </div>
                        {/* Availability date */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="availability_date">Availability date</label>
                            <input
                                type="date"
                                {...register("availability_date", { required: true })}
                                className="py-3 px-4 text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="availability_date"
                            />
                            {errors.availability_date && (
                                <span className="text-red-500">Please input a valid number*</span>
                            )}
                        </div>
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
                            <span className="text-red-500">Please input a valid Bangladeshi phone number*</span>
                        )}
                    </div>
                    {/* Description*/}
                    <div className="flex flex-col space-y-2 mb-4">
                        <label htmlFor="description">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            className="py-3 px-4 text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                            id="description"
                            cols="30"
                            rows="5"
                            placeholder="Enter description"
                        ></textarea>
                        {errors.description && (
                            <span className="text-red-500">This field is required*</span>
                        )}
                    </div>
                    {/* Photo*/}
                    <div className="flex flex-col justify-center items-center border-2 border-[#F89A20] space-y-2 mb-4 rounded-md">
                        <input type="file" {...register('photo', { required: true })} className="img_upload w-full p-10 bg-slate-100 " />
                        {errors.photo && (
                            <span className="text-red-500">This field is required*</span>
                        )}
                    </div>
                    {/* Add House Button */}
                    <button
                        type="submit"
                        disabled={false}
                        className={`py-3 mt-4 text-lg shadow bg-[#F89A20] w-full rounded-md text-white font-medium duration-300 hover:tracking-widest `}
                    >
                        Add House
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddHouse;