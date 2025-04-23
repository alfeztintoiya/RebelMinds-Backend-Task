const express = require('express')
const router  = express.Router()
const {handleAddRestaurant} = require('../controllers/restaurant')

router.post("/restaurant",handleAddRestaurant);

module.exports = router;