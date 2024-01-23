import { Link, NavLink } from "react-router-dom";
import HouseHunterLogo from "../assets/HouseHunterLogo2.png";
import useAuth from "../Hooks/useAuth";
import { FaHome, FaUser } from "react-icons/fa";
import { MdAddHome, MdMapsHomeWork } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";



const Sidebar = () => {
    const { user, setUser } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("access-token");
        setUser(null);
    }

    const activeRoute = ({ isActive }) =>
        isActive
            ? "bg-[#F89A20] py-2 px-3 rounded-md text-white uppercase"
            : "py-2 px-3 rounded-md uppercase text-white";

    return (
        <div>
            <Link className="hidden md:block" to={"/"}>
                <div className="flex items-center justify-center">
                    <img className="w-40" src={HouseHunterLogo} alt="Logo" />
                </div>
            </Link>

            <ul className="menu menu-sm mt-3 space-y-2">
                {user?.role === 'owner' ? (
                    <>
                        <li>
                            <NavLink className={activeRoute} to={"/dashboard/myHouses"}>
                                <MdMapsHomeWork /><span className="">My Houses</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={activeRoute} to={"/dashboard/addHouse"}>
                                <MdAddHome /><span className="">Add House</span>
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink className={activeRoute} to={"/dashboard/myprofile"}>
                                <FaUser /> <span className="hidden md:block">My Profile</span>
                            </NavLink>
                        </li>
                    </>
                )}
                {/* Devider */}
                <div className="divider divider-warning"></div>
                <>
                    <li>
                        <NavLink className={activeRoute} to={"/"}>
                            <FaHome /> <span className="">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={activeRoute} to={"/"}>
                            <IoIosLogOut /> <span onClick={handleLogout} className="">Log Out</span>
                        </NavLink>
                    </li>
                </>
            </ul>
        </div>
    );
};

export default Sidebar;