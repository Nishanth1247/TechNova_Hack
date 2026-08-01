import axios from "./axios";

export const getDashboardStats = async () => {

    const res = await axios.get("/dashboard");

    return res.data;

};