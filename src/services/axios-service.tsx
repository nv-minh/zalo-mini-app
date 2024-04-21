import axios from "axios";

const axiosCommon = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
        "content-type": "application/json",
    },
});

axiosCommon.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosCommon.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosCommon;
