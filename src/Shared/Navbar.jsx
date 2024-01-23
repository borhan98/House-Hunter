import { Link, NavLink } from "react-router-dom";
import HouseHunterLogo from "../assets/HouseHunterLogo2.png";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {
    const { user } = useAuth();

    const activeRoute = ({ isActive }) =>
        isActive
            ? "bg-[#F89A20] py-2 px-3 rounded-md text-white uppercase"
            : "py-2 px-3 rounded-md uppercase text-white";

    const menuLinks = (
        <>
            <li>
                <NavLink className={activeRoute} to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={activeRoute} to={"/signin"}>
                    sign in
                </NavLink>
            </li>
            {
                user && <>
                    <li>
                        <NavLink className={activeRoute} to={user?.role === "owner" ? "/dashboard/myHouses" : "/dashboard/myBookings"}>
                            Dashboard
                        </NavLink>
                    </li>
                </>
            }
        </>
    );

    return (
        <div className=" fixed w-full shadow-md">
            <div className="container mx-auto px-2 lg:px-0 navbar py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                        </ul>
                    </div>
                    <div>
                        {/* Website Logo */}
                        <Link>
                            <figure>
                                <img className="w-20 md:w-28 lg:w-40" src={HouseHunterLogo} alt="Logo" />
                            </figure>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ? <Link to={"/signin"}>
                            <button className="py-2 px-4 rounded-md bg-[#F89A20] text-white uppercase">
                                sign in
                            </button>
                        </Link> : <Link to={"/dashboard"}>
                            <button className="py-2 px-4 rounded-md bg-[#F89A20] text-white uppercase">
                                dashboard
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;