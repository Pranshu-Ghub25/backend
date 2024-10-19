// routes/sample.js
const express = require('express');
const SomeModel = require('../models/SomeModelSchema');
const router = express.Router();
const mongoose = require('mongoose');


// GET route to fetch all blog posts
router.get("/", async (req, res) => {
    try {
        const sampleResponse = {
            "name": "Vaitiii",
            "greet": "Hello, Vaitii! Welcome to our service!"
          }
          
          
        res.status(200).json( sampleResponse );
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Failed to fetch posts" });
    }
});
module.exports = router;