const menu =  require('../model/menu');

async function handleAddOrders(req,res){
    try {
        
        const { restaurant_id, name, price, category, is_available } = req.body;
        console.log(name);
        const it = await menu.findOne({ name });
        if(it){
            return res.json({ msg: "This item is alredy in menu."});
        }
        const newItem = await menu.create({ restaurant_id, name, price, category, is_available });
        return res.status(201).json({ status:true , msg:"New Item Added." , newItem});
    } catch (error) {
        res.status(500).json({ message: "Server Error."});
    }
}

module.exports = {
    handleAddOrders
}