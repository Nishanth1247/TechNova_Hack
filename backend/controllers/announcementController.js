const db = require("../config/db");

// Get all announcements
const getAnnouncements = (req, res) => {

    const sql = `
        SELECT
            a.id,
            a.title,
            a.description,
            a.priority,
            a.target_role,
            a.created_at,
            COUNT(aa.id) AS acknowledgements
        FROM announcements a

        LEFT JOIN announcement_acknowledgements aa
        ON a.id = aa.announcement_id

        GROUP BY a.id

        ORDER BY a.created_at DESC;
    `;

    db.query(sql, (err, result) => {

        if (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message,
    });

}

        res.json(result);

    });

};

// Get announcement by id
const getAnnouncementById = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT
            a.id,
            a.title,
            a.description,
            a.priority,
            a.target_role,
            a.created_at,
            COUNT(aa.id) AS acknowledgements
        FROM announcements a

        LEFT JOIN announcement_acknowledgements aa
        ON a.id = aa.announcement_id

        WHERE a.id = ?

        GROUP BY a.id;
    `;

    db.query(sql, [id], (err, result) => {

        if (err) {

    console.log("MYSQL ERROR:");
    console.log(err);

    return res.status(500).json({
        message: err.message,
    });

}

        if (result.length === 0) {
            return res.status(404).json({
                message: "Announcement not found",
            });
        }

        res.json(result[0]);

    });

};

// Delete announcement
const deleteAnnouncement = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM announcements WHERE id=?",
        [id],
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: err.message,
                });

            }

            res.json({
                message: "Announcement deleted successfully",
            });

        }
    );

};

// Create announcement
const createAnnouncement = (req, res) => {

    console.log(req.body);

    const {
        title,
        description,
        priority,
        target_role,
    } = req.body;

    const sql = `
        INSERT INTO announcements
        (
            title,
            description,
            priority,
            target_role,
            created_by
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            description,
            priority,
            target_role,
            3 // Replace later with logged-in user's ID from JWT
        ],
        (err) => {

            if (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message,
    });

}

            res.status(201).json({
                message: "Announcement Created Successfully",
            });

        }
    );

};

module.exports = {
    getAnnouncements,
    getAnnouncementById,
    createAnnouncement,
    deleteAnnouncement,
};