import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";

const apiRequest = async (path: string, method: AxiosRequestConfig['method'], databody: any) => {
    try {
        // axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
        let options: AxiosRequestConfig = {
            url: path,
            method: method,
            data: databody
        };

        let res = await axios(options);
        return res.data;
    } catch (err) {
        // console.log(err);
        throw err;
    }
}

export default apiRequest;

