import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useHouses from "../../Hooks/useHouses";
import House from "./House";

const MyHouses = () => {
    const { user } = useAuth();
    const [houses, refetch] = useHouses();
    const myHouses = houses.filter(house => house.email === user?.email);
    return (
        <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
            <Helmet>
                <title>HouseHunter | My Houses</title>
            </Helmet>
            <h3 className="text-3xl text-center mb-10">Manage your House</h3>
            <table className="table mt-6">
                <thead>
                    <tr className="bg-[#F89A20] text-white uppercase">
                        <th>SL</th>
                        <th>Name</th>
                        <th>Rent</th>
                        <th>address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myHouses.map((house, index) => (
                        <House key={house._id} house={house} index={index} refetch={refetch} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyHouses;