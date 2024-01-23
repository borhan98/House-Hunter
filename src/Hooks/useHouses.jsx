import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useHouses = () => {
    const axiosPublic = useAxiosPublic();

    const { data: houses = [] } = useQuery({
        queryKey: ["houses"],
        queryFn: async () => {
            const res = await axiosPublic.get("/houses");
            return res.data;
        }
    })

    return [houses];
};

export default useHouses;