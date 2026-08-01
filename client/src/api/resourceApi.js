import api from "./axios";

export const getResources = async () => {
    const res = await api.get("/resources");
    return res.data;
};

export const deleteResource = async (id) => {
    const res = await api.delete(`/resources/${id}`);
    return res.data;
};

export const uploadResource = async (data) => {

    const form = new FormData();

    form.append("title", data.title);
    form.append("description", data.description);
    form.append("subject", data.subject);
    form.append("file", data.file);

    const res = await api.post(
        "/resources",
        form,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return res.data;

};