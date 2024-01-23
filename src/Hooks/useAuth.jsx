import { useContext } from "react";
import { UserContext } from "../UserProvider/UserProvider";


const useAuth = () => {
    const auth = useContext(UserContext)
    return auth;
};

export default useAuth;