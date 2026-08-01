import api from "./axios";

export const getSupportTickets = async () => {
    const res = await api.get("/support");
    return res.data;
};

export const getTicket = async (id) => {
    const res = await api.get(`/support/${id}`);
    return res.data;
};

export const getReplies = async (id) => {
    const res = await api.get(`/support/${id}/replies`);
    return res.data;
};

export const sendReply = async (id, message) => {
    const res = await api.post(`/support/${id}/replies`, {
        message,
    });
    return res.data;
};

export const updateStatus = async (id, status) => {
    const res = await api.put(`/support/${id}/status`, {
        status,
    });
    return res.data;
};