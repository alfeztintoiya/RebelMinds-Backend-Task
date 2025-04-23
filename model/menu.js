const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    is_available: {
        type: Boolean,
        default: true
    }
}, { timestamps: true});

const Menu = mongoose.model('menu',menuSchema);

module.exports = Menu;