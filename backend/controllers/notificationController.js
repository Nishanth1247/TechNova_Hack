const db = require("../config/db");

// Get Notifications
const getNotifications = (req, res) => {

    const sql = `
        SELECT *
        FROM notifications
        ORDER BY created_at DESC
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

// Mark all as read
const markAllRead = (req, res) => {

    const sql = `
        UPDATE notifications
        SET is_read = 1
    `;

    db.query(sql, (err) => {

        if (err) {
            return res.status(500).json({
                message: err.message,
            });
        }

        res.json({
            message: "All notifications marked as read",
        });

    });

};

// Delete notification
const deleteNotification = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM notifications WHERE id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: err.message,
                });
            }

            res.json({
                message: "Notification deleted",
            });

        }
    );

};

module.exports = {
    getNotifications,
    markAllRead,
    deleteNotification,
};