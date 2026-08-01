const db = require("../config/db");

const query = (sql) => {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

const getDashboardStats = async (req, res) => {

    try {

        const [
            students,
            faculty,
            announcements,
            tickets,
            recentAnnouncements,
            recentTickets,
            recentNotifications
        ] = await Promise.all([

            query("SELECT COUNT(*) AS totalStudents FROM users WHERE role='student'"),

            query("SELECT COUNT(*) AS totalFaculty FROM users WHERE role='faculty'"),

            query("SELECT COUNT(*) AS totalAnnouncements FROM announcements"),

            query("SELECT COUNT(*) AS openTickets FROM support_tickets WHERE status='Open'"),

            query(`
                SELECT
                    title,
                    description,
                    created_at
                FROM announcements
                ORDER BY created_at DESC
                LIMIT 3
            `),

            query(`
                SELECT
                    title,
                    status
                FROM support_tickets
                ORDER BY created_at DESC
                LIMIT 3
            `),

            query(`
                SELECT
                    title
                FROM notifications
                ORDER BY created_at DESC
                LIMIT 5
            `)

        ]);

        res.json({

            totalStudents: students[0].totalStudents,

            totalFaculty: faculty[0].totalFaculty,

            totalAnnouncements: announcements[0].totalAnnouncements,

            openTickets: tickets[0].openTickets,

            recentAnnouncements,

            recentTickets,

            recentNotifications,

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Database Error",
        });

    }

};

module.exports = {
    getDashboardStats,
};