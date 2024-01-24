import PropTypes from "prop-types";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const House = ({ house, index, refetch }) => {
    const { _id, name, rent_per_month, address, city } = house;
    const axiosSecure = useAxiosSecure();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/houses/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            toast.success('House deleted!',
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
        });
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td className="flex"><FaBangladeshiTakaSign />{rent_per_month}</td>
            <td>{address}, {city} </td>
            <td className="flex gap-6">
                <Link to={`/dashboard/editHouse/${_id}`}>
                    <button className="bg-[#F89A20] text-white text-2xl p-2"><FaRegEdit /></button>
                </Link>
                <button onClick={handleDelete} className="bg-[#F89A20] text-white text-2xl p-2"><RiDeleteBin5Line /></button>
            </td>
        </tr>
    );
};

export default House;
House.propTypes = {
    house: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    refetch: PropTypes.func.isRequired,
}