const express = require("express");

const router = express.Router();

const {
    getAnnouncements,
    getAnnouncementById,
    createAnnouncement,
    deleteAnnouncement,
} = require("../controllers/announcementController");

// Get all announcements
router.get("/", getAnnouncements);

// Get one announcement
router.get("/:id", getAnnouncementById);

// Create announcement
router.post("/", createAnnouncement);

// Delete announcement
router.delete("/:id", deleteAnnouncement);

module.exports = router;