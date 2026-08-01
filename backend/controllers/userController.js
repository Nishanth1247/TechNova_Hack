const db = require("../config/db");

// Get all users
const getUsers = (req, res) => {

    const sql = `
        SELECT
            id,
            name,
            email,
            role,
            department,
            status
        FROM users
        ORDER BY id DESC
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

// Delete user
const deleteUser = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM users WHERE id=?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: err.message,
                });
            }

            res.json({
                message: "User deleted successfully",
            });

        }
    );

};

module.exports = {
    getUsers,
    deleteUser,
};