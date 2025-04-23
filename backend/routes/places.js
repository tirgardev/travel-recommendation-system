const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// Get all places
router.get('/', async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Add a new place
router.post('/', async (req, res) => {
    const { name, location, category, description, image } = req.body;
    try {
        const newPlace = new Place({ name, location, category, description, image });
        await newPlace.save();
        res.json(newPlace);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
