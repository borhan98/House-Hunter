import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    // Request
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, (err) => {
            return Promise.reject(err);
        }
    )

    // Response 
    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        }, (err) => {
            console.log("Error occured when getting response", err);
            const status = err.response.status;
            if (status === 403 || status === 401) {
                localStorage.removeItem('access-token');
            }
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;