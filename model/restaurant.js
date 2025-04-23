const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, { timestamps: true});

const Restaurant = mongoose.model('restaurant',restaurantSchema);

module.exports = Restaurant;