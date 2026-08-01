const express = require("express");

const router = express.Router();

const upload = require("../config/upload");

const {
    getResources,
    createResource,
    deleteResource,
} = require("../controllers/resourceController");

// Get all resources
router.get("/", getResources);

// Upload resource
router.post(
    "/",
    upload.single("file"),
    createResource
);

// Delete resource
router.delete("/:id", deleteResource);

module.exports = router;