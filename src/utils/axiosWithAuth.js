import axios from "axios";

const axiosWithAuth = () => {
    // getting token from localstorage
    const token = window.localStorage.getItem("token");
    
    return axios.create({
        headers: {
            authorization: token,
        },
        // add deployed backend url here 
        baseURL: "",
    });
};

export default axiosWithAuth;