const express = require("express");

const router = express.Router();

const {
    getNotifications,
    markAllRead,
    deleteNotification,
} = require("../controllers/notificationController");

router.get("/", getNotifications);

router.put("/read-all", markAllRead);

router.delete("/:id", deleteNotification);

module.exports = router;