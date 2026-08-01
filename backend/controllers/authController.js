const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
            });
        }

        if (result.length === 0) {

            return res.status(401).json({
                message: "Invalid Email",
            });

        }

        const user = result[0];

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid Password",
            });

        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        res.json({

            token,

            user: {

                id: user.id,

                name: user.name,

                email: user.email,

                role: user.role,

            },

        });

    });

};

module.exports = {

    login,

};