const express = require('express')
const router  = express.Router()
const {handleAddOrders} = require('../controllers/menu');

router.post('/addmenu',handleAddOrders);

module.exports = router;