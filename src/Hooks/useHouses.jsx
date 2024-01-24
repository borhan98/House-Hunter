import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useHouses = () => {
    const axiosPublic = useAxiosPublic();

    const { data: houses = [], refetch } = useQuery({
        queryKey: ["houses"],
        queryFn: async () => {
            const res = await axiosPublic.get("/houses");
            return res.data;
        }
    })

    return [houses, refetch];
};

export default useHouses;