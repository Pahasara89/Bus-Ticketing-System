const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    orderID: {
        type: String,
    },
    customerName : {
        type : String,
        required: true
    },
    customerContactNumber : {
        type: Number,
        required: true
    },
    deliveryAddress : {
        type: String,
        required: true
    },
    
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

