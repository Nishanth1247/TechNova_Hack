const db = require("../config/db");

// Get Alerts
const getAlerts = (req, res) => {

    const sql = `
        SELECT *
        FROM emergency_alerts
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, result) => {

        if (err)
            return res.status(500).json({
                message: err.message,
            });

        res.json(result);

    });

};

// Create Alert
const createAlert = (req, res) => {

    const {
        title,
        message,
        severity,
        target,
    } = req.body;

    const sql = `
        INSERT INTO emergency_alerts
        (
            title,
            message,
            severity,
            target,
            created_by
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            message,
            severity,
            target,
            3
        ],
        (err) => {

            if (err)
                return res.status(500).json({
                    message: err.message,
                });

            res.status(201).json({
                message: "Emergency Alert Sent",
            });

        }
    );

};

module.exports = {
    getAlerts,
    createAlert,
};