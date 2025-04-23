const restaurant = require('../model/restaurant')

async function handleAddRestaurant(req,res){
    const {name} = req.body;
    
    const resData = {
        name: name,
    };

    const newRestaurant = await restaurant.create(resData);
    return res.status(200).json({ status: true , msg: "Reaturant Create Successfully."});
}

module.exports = {
    handleAddRestaurant
}