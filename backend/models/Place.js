const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    location: String,
    category: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Place', PlaceSchema);
