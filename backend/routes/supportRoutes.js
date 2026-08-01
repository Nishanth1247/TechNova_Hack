const express = require("express");

const router = express.Router();

const {
    getSupportTickets,
    getTicketById,
    getReplies,
    addReply,
    updateStatus,
} = require("../controllers/supportController");

// Get all tickets
router.get("/", getSupportTickets);

// Get single ticket
router.get("/:id", getTicketById);

// Get replies for a ticket
router.get("/:id/replies", getReplies);

// Add a reply
router.post("/:id/replies", addReply);

// Update ticket status
router.put("/:id/status", updateStatus);

module.exports = router;