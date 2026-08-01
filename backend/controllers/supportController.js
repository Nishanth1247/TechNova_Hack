const db = require("../config/db");

// Get all support tickets
const getSupportTickets = (req, res) => {

    const sql = `
        SELECT
            s.id,
            s.title,
            s.category,
            s.status,
            s.created_at,
            u.name AS student
        FROM support_tickets s

        LEFT JOIN users u
        ON s.created_by = u.id

        ORDER BY s.created_at DESC
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
const getTicketById = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT
            s.*,
            u.name AS student
        FROM support_tickets s

        LEFT JOIN users u
        ON s.created_by = u.id

        WHERE s.id=?
    `;

    db.query(sql, [id], (err, result) => {

        if (err)
            return res.status(500).json({
                message: err.message,
            });

        if (result.length === 0)
            return res.status(404).json({
                message: "Ticket not found",
            });

        res.json(result[0]);

    });

};
const getReplies = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT
            sr.*,
            u.name
        FROM support_replies sr

        LEFT JOIN users u
        ON sr.replied_by=u.id

        WHERE ticket_id=?

        ORDER BY created_at
    `;

    db.query(sql, [id], (err, result) => {

        if (err)
            return res.status(500).json({
                message: err.message,
            });

        res.json(result);

    });

};
const addReply = (req, res) => {

    const { id } = req.params;

    const { message } = req.body;

    const sql = `
        INSERT INTO support_replies
        (
            ticket_id,
            replied_by,
            message
        )
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [
            id,
            3,
            message
        ],
        (err) => {

            if (err)
                return res.status(500).json({
                    message: err.message,
                });

            res.json({
                message: "Reply Added",
            });

        }
    );

};
const updateStatus = (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    db.query(
        "UPDATE support_tickets SET status=? WHERE id=?",
        [status, id],
        (err) => {

            if (err)
                return res.status(500).json({
                    message: err.message,
                });

            res.json({
                message: "Status Updated",
            });

        }
    );

};

module.exports = {
    getSupportTickets,
    getTicketById,
    getReplies,
    addReply,
    updateStatus,
};