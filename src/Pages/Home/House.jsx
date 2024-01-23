import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBed, FaBath, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBangladeshiTakaSign, FaLocationDot } from "react-icons/fa6";



const House = ({ house }) => {
    const { name, bedrooms, bathrooms, room_size, rent_per_month, availability_date, city, address, photo, phone, description } = house;
    return (
        <div className="grid gap-6 md:grid-cols-2 rounded-md overflow-hidden p-6 border shadow-md">
            <figure className="w-full">
                <img className="w-full rounded-md h-[350px] object-cover" src={photo} alt="House Picture" />
            </figure>
            <div className="py-4">
                <h4 className="text-2xl font-medium">{name}</h4>
                <p className="text-slate-700 mt-1">{description}</p>
                <div className=" flex gap-8 items-center my-8">
                    <div className="">
                        <p className="flex items-center gap-2"><FaBed /> Bedroom</p>
                        <p className="ml-6">{bedrooms} rooms</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2"> <FaBath /> Bathroom</p>
                        <p className="ml-6">{bathrooms} </p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2"><SlSizeFullscreen /> Room size</p>
                        <p className="ml-6">{room_size}</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2"><FaBangladeshiTakaSign /> Rent per month</p>
                        <p className="ml-6">{rent_per_month}</p>
                    </div>
                </div>
                <div className=" flex gap-8 items-center my-8">
                    <div className="">
                        <p className="flex items-center gap-2"> <FaLocationDot />{address},</p>
                        <p className="ml-6">{city}</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2"><FaCalendarAlt /> Available till</p>
                        <p className="ml-6">{availability_date}</p>
                    </div>
                    <div className="">
                        <p className="flex items-center gap-2"><FaPhoneAlt /> Phone</p>
                        <p className="ml-6">{phone}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <Link>
                    <button className="bg-[#F89A20] py-2 px-3 rounded-md text-white uppercase font-medium">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default House;
House.propTypes = {
    house: PropTypes.object.isRequired,
}