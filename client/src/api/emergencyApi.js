import api from "./axios";

export const getAlerts = async () => {
    const res = await api.get("/emergency");
    return res.data;
};

export const createAlert = async (data) => {
    const res = await api.post("/emergency", data);
    return res.data;
};