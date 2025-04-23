const mongoose = require('mongoose')

const orderItemSubSchema = new mongoose.Schema({
    menu_item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'menu', required: true },
    name: String,
    quantity: Number,
    price: Number,
    total: Number
});

const orderSchema = new mongoose.Schema({
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
        required: true,
    },
    customer_name:{
        type: String,
        required: true
    },
    order_type:{
        type: String,
        enum: ['DINE_IN','DELIVERY'],
        default: 'DINE_IN'
    },
    items: [orderItemSubSchema],
    total_price: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('order',orderSchema);

module.exports = Order;