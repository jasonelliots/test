import axios from "axios";

const axiosWithAuth = () => {
    // getting token from localstorage
    const token = window.localStorage.getItem("token");
    
    return axios.create({
        headers: {
            authorization: token,
        },
        baseURL: "https://jswatermyplants-backend.herokuapp.com",
    });
};

export default axiosWithAuth;