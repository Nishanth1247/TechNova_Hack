const db = require("../config/db");

// Get all resources
const getResources = (req, res) => {

    const sql = `
        SELECT
            r.*,
            u.name AS uploadedBy
        FROM resources r

        LEFT JOIN users u
        ON r.uploaded_by = u.id

        ORDER BY r.created_at DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message,
            });
        }

        res.json(result);

    });

};

// Delete Resource
const deleteResource = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM resources WHERE id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: err.message,
                });
            }

            res.json({
                message: "Resource Deleted",
            });

        }
    );

};
const createResource = (req, res) => {

    const {
        title,
        description,
        subject,
    } = req.body;

    const file_url = req.file
        ? `/uploads/${req.file.filename}`
        : null;

    const sql = `
        INSERT INTO resources
        (
            title,
            description,
            file_url,
            subject,
            uploaded_by
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            description,
            file_url,
            subject,
            3
        ],
        (err) => {

            if (err)
                return res.status(500).json({
                    message: err.message,
                });

            res.status(201).json({
                message: "Resource Uploaded"
            });

        }
    );

};

module.exports = {
    getResources,
    createResource,
    deleteResource,
};