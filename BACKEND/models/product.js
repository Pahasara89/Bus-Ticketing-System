const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    ID : {
        type : String,
    },
    productID: {
        type:String,
        
    },
    productName : {
        type : Number,
        required : true,
        unique: true,

    },
    root: {
        type : String,
        required : true,
       

    },
    bNo : {
        type : String,
        required : true,
       

    },
    category : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    size : {
        type: String,
        required: true
    },
    image : {
        type : String,
        required : true,
        unique : true
    }
    

    
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;