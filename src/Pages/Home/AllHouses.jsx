import { FaSearch } from "react-icons/fa";
import House from "./House";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllHouses = () => {
    const [priceRange, setPriceRange] = useState("");
    const [roomSize, setRoomSize] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const axiosPublic = useAxiosPublic();
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axiosPublic
          .get(
            `/houses?priceRange=${priceRange}&roomSize=${roomSize}&searchValue=${searchValue}`
          )
          .then((res) => setHouses(res.data));
      }, [axiosPublic, priceRange, roomSize, searchValue]);

    return (
        <div id="all_house" className="container mx-auto px-2 lg:px-0 py-24">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
                <h3 className="text-3xl font-semibold">Accommodation Avenue</h3>
                <p>Explore a world of possibilities as Accommodation Avenue unfolds before you, revealing a tapestry of exceptional rentals where every stay is an invitation to create a personalized narrative, uniquely tailored to your desires and dreams.</p>
            </div>
            {/* Search field */}
            <form className="flex justify-center mb-20">
                <input
                    onChange={() => setSearchValue(event.target.value)}
                    className="p-2 border border-[#F89A20] rounded-l-md focus:outline-none"
                    type="search"
                    placeholder="Search by city"
                    name="search"
                />
                <button className="bg-[#F89A20] w-fit px-4 text-white rounded-r-md">
                    <FaSearch />
                </button>
            </form>
            {/* Filter by room size and price range */}
            <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="bg-base-200 p-2 rounde-md">
                    <label className="mx-2" htmlFor="room_size">
                        Filter by room size
                    </label>
                    <select
                        onClick={() => setRoomSize(event.target.value)}
                        className="rounded-md p-2 focus:outline-none"
                        name="room_size"
                        id="room_size"
                    >
                        <option value={""}>All</option>
                        <option value={"Small"}>Small</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Large"}>Large</option>
                    </select>
                </div>
                <div className="bg-base-200 p-2 rounde-md">
                    <label className="mx-2" htmlFor="range">
                        Price range
                    </label>
                    <select
                        onClick={() => {
                            setPriceRange(event.target.value);
                        }}
                        className="rounded-md p-2 focus:outline-none"
                        name="range"
                        id="range"
                    >
                        <option value={""}>All</option>
                        <option value={"1000-3000"}>1000-3000</option>
                        <option value={"3000-5000"}>3000-5000</option>
                        <option value={"5000-7000"}>5000-7000</option>
                        <option value={"7000-10000"}>7000-10000</option>
                    </select>
                </div>
            </div>
            <div className="space-y-10">
                {
                    houses.map(house => <House key={house._id} house={house} />)
                }
            </div>
        </div>
    );
};

export default AllHouses;