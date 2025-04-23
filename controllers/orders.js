const order = require('../model/order');
const menu = require('../model/menu')

async function handleAddOrders(req,res){
    try {
        
        const { restaurant_id, customer_name, order_type, items } = req.body;

        
        const menuIds = items.map(i => i.menu_item_id);
        const menuDocs = await menu.find({ _id: { $in: menuIds }, restaurant_id, is_available: true });
        
        if (menuDocs.length !== items.length) {
            return res.status(400).json({ error: 'One or more items unavailable or invalid.' });
        }

        
        let totalPrice = 0;
        const orderItems = items.map(i => {
        const doc = menuDocs.find(m => m._id.toString() === i.menu_item_id);
        const itemTotal = doc.price * i.quantity;
        totalPrice += itemTotal;
        
        return {
            menu_item_id: doc._id,
            name: doc.name,
            quantity: i.quantity,
            price: doc.price,
            total: itemTotal
        };
        });

    
        const newOrder = await order.create({ restaurant_id, customer_name, order_type, items: orderItems, total_price: totalPrice });
        

    
        res.status(201).json({ status: true, msg: "Order Added Successfully.", newOrder});
    } catch (error) {
        res.status(500).json({ message: "Server Error."});
    }
}

async function handleGetOrder(req,res){
    try {
        const orders = await order.findById(req.params.id);
        if (!orders) return res.status(404).json({ error: 'Order not found' });
    
        res.status(201).json({orders});
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}
module.exports = {
    handleAddOrders,
    handleGetOrder
}