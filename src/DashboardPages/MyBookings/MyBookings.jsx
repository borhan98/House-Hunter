import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useHouses from "../../Hooks/useHouses";


const MyBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [houses] = useHouses();
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
            return res.data;
        }
    })

    console.log(bookings, houses);

    // const bookingIds = bookings.map(b => {
    //     if (b.house_id) {
    //         return b.house_id;
    //     }
    // })

    return (
        <div className="md:shadow-md pb-14 md:px-10 mx-1 md:mx-10">
            <Helmet>
                <title>HouseHunter | My Bookings</title>
            </Helmet>
            <h3 className="text-3xl text-center mb-10">Manage your Bookings</h3>
            <table className="table mt-6">
                <thead>
                    <tr className="bg-[#F89A20] text-white uppercase">
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Membership</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {bookings.map((book, index) => (
                        <Booking key={book._id} book={book} index={index} />
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;