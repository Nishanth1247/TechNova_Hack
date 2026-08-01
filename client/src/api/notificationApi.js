import api from "./axios";

export const getNotifications = async () => {
    const res = await api.get("/notifications");
    return res.data;
};

export const markAllRead = async () => {
    const res = await api.put("/notifications/read-all");
    return res.data;
};

export const deleteNotification = async (id) => {
    const res = await api.delete(`/notifications/${id}`);
    return res.data;
};