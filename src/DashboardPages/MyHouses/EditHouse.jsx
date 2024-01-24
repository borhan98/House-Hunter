import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const EditHouse = () => {
    const house = useLoaderData();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
    } = useForm();
    const { _id, name, address, city, room_size, bedrooms, bathrooms, rent_per_month, availability_date, description, phone, photo } = house;

    const onSubmit = updateHouse => {
        if (!user) {
            return;
        }
        updateHouse.photo = photo;
        updateHouse.email = user?.email;
        updateHouse.user_name = user?.name;
        axiosSecure.put(`/houses/${_id}`, updateHouse)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('House Information modified!',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
                if (!res.data.modifiedCount) {
                    toast.error('You didn\'t modified anything!',
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
        <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
            <Helmet>
                <title>HouseHunter | Edit House</title>
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
                                {...register("name")} defaultValue={name}
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="name"
                            />
                        </div>
                        {/* Address */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="address">House address</label>
                            <input
                                {...register("address")}
                                type="text"
                                defaultValue={address}
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="address"
                            />
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* City */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="city">City</label>
                            <input
                                {...register("city")}
                                type="text"
                                defaultValue={city}
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="city"
                            />
                        </div>
                        {/* Room size */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="room_size">Room size</label>
                            <select defaultValue={room_size} className="py-3 px-4 w-full text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("room_size")}>
                                <option value="" className="text-slate-400" >Select an Option</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="grid gap-10 grid-cols-2">
                        {/* Bedrooms */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="bedrooms">How many bedrooms?</label>
                            <select defaultValue={bedrooms} className="py-3 px-4 w-full text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("bedrooms")}>
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
                        </div>
                        {/* Bathrooms */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="bathrooms">How many bathroom?</label>
                            <select defaultValue={bathrooms} className="py-3 px-4 w-full text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none " id="role" {...register("bathrooms")}>
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
                                defaultValue={rent_per_month}
                                className="py-3 px-4 text-black bg-slate-100  rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="rent_per_month"
                            />
                        </div>
                        {/* Availability date */}
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="availability_date">Availability date</label>
                            <input
                                type="date"
                                {...register("availability_date")} defaultValue={availability_date}
                                className="py-3 px-4 text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                                id="availability_date"
                            />
                        </div>
                    </div>
                    {/* Phone number Field */}
                    <div className="flex flex-col space-y-2 mb-4">
                        <label htmlFor="phone">Your phone number</label>
                        <input
                            {...register("phone", {
                                required: true, pattern: /^(\+88)?01[3-9]\d{8}$/
                            })}
                            type="text" defaultValue={phone}
                            className="py-3 px-4 w-full text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                            id="phone"
                        />
                    </div>
                    {/* Description*/}
                    <div className="flex flex-col space-y-2 mb-4">
                        <label htmlFor="description">Description</label>
                        <textarea
                            {...register("description")}
                            className="py-3 px-4 text-black bg-slate-100 rounded-md shadow focus:shadow-xl focus:outline-none "
                            id="description"
                            cols="30"
                            rows="5" defaultValue={description}
                        ></textarea>
                    </div>
                    {/* Photo*/}
                    {/* <div className="flex flex-col justify-center items-center border-2 border-[#F89A20] space-y-2 mb-4 rounded-md">
                        <input defaultValue={photo} type="file" {...register('photo')} className="img_upload w-full p-10 bg-slate-100 " />
                    </div> */}
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

export default EditHouse;