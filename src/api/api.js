import axios from "axios";

const SERVER_URL = process.env.REACT_APP_NODE_SERVER_URL;

let axiosConfigAll = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    },
    withCredentials: false,
  };

export const submitFormData = async (data) => {
    try {
        const result = axios.post(
            `${SERVER_URL}/forms/submit`,
            data,
            axiosConfigAll
        )
        .then((res) => {
            return {message: res.data, error: null};
        })
        .catch((error)  => {
            return {message: null, error: error.response.data.message[0]}
        });

        return result;
    } catch (error) {
        console.log('error')
        return error;
    }
}