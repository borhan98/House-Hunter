import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("/user")
            .then(res => {
                setUser(res.data)
                console.log(res.data);
            })
    }, [axiosSecure])

    const userInfo = {
        user,
        setUser
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
};

export default UserProvider;
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}