import axios from "axios";

const SERVER_URL = process.env.REACT_APP_NODE_SERVER_URL;

let axiosConfigAll = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: false,
  };

export const submitFormData = async (data) => {
    console.log(data);
    try {
        const result = axios.post(
            `${SERVER_URL}/forms/submit`,
            data,
            axiosConfigAll
        );

        return result;
    } catch (error) {
        return error;
    }
}