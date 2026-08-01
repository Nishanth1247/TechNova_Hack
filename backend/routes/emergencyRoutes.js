const express = require("express");

const router = express.Router();

const {
    getAlerts,
    createAlert,
} = require("../controllers/emergencyController");

router.get("/", getAlerts);

router.post("/", createAlert);

module.exports = router;