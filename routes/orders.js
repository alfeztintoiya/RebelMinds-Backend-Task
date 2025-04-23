const express = require('express')
const router  = express.Router()
const {handleAddOrders,handleGetOrder} = require('../controllers/orders');

router.post('/orders',handleAddOrders);
router.get('/order/:id',handleGetOrder);

module.exports = router;