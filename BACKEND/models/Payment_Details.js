const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Payment_DetailsSchema = new Schema({

    ID: {
        type : String,
    },
    Pay_ID: {
        type:String,
        
    },


    BanK_Owner_Name : {
        type : String,
        required : true,
    },
    Pay_date : {
        type : Date,
        required : true
    },
/*----------------------------------------*/

    BanKName : {
        type : String,
        required : true,
    },
    Card_No : {
        type : Number,
        required : true,
        unique: true,
    },
    Expiry : {
        type : String,
        required : true
    },
    Cvv : {
        type: Number,
        required: true
    },

 
    

    
})

const Payment_Details = mongoose.model("Payment_Details",Payment_DetailsSchema);

module.exports = Payment_Details;