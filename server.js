const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT =  8015;

mongoose.connect("mongodb://127.0.0.1:27017/backendTask").then(()=>console.log("Mongodb Connected.."))
                                                            .catch(err => console.log("MongoDB Connection error.."));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const restaurant = require('./routes/restaurants');
const menuItems = require('./routes/menu');
const orders = require('./routes/orders')

app.use("/api",restaurant);
app.use("/api",menuItems);
app.use("/api",orders);

app.listen(PORT,()=> console.log(`Server started at ${PORT}..`));