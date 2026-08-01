import api from "./axios";

// Get all announcements
export const getAnnouncements = async () => {
  const res = await api.get("/announcements");
  return res.data;
};

// Get one announcement
export const getAnnouncementById = async (id) => {
  const res = await api.get(`/announcements/${id}`);
  return res.data;
};

// Delete announcement
export const deleteAnnouncement = async (id) => {
  const res = await api.delete(`/announcements/${id}`);
  return res.data;
};

export const createAnnouncement = async (data) => {
  const res = await api.post("/announcements", data);
  return res.data;
};