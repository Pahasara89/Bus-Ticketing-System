const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
let Payment_Details = require("../models/Payment_Details");


router.post('/add_Payment', async(req,res)=>{

    const newPayment_Details = new Payment_Details({

        Pay_ID: req.body,

        BanK_Owner_Name: req.body.BanK_Owner_Name,
        Pay_date: req.body.Pay_date,

        BanKName: req.body.BanKName,
        Card_No: req.body.Card_No,
        Expiry: req.body.Expiry,
        Cvv: req.body.Cvv,

   
        
    })

    const totalNumberOfPaymentInDb = await Payment_Details.countDocuments()

    // convert number to string, so we can concatenate 0s easily...
    
        let numberToString = totalNumberOfPaymentInDb.toString()
    
    
    
        // If length of number string is less than 5 then add leading 0s in nuberToString
    
        if(numberToString.length < 5){
    
            for (let i = numberToString.length; i < 5; i++){
    
                numberToString = '0' + numberToString
    
            }
    
        }
    
        newPayment_Details.Pay_ID = `PAY${numberToString}`

    newPayment_Details.save().then(()=>{
       // alert('Payment successfully');
        //res.redirect('http://localhost:3000/add_Payment');
        return res.status(200).json({msg:"success"})

    }).catch((err)=>{
        alert('Payment Failed');
        //res.redirect('http://localhost:3000/add_Payment');
        return res.status(400).json({msg:"error"})
        console.log(err);
    })

})



router.route("/view_Payment").get((req,res)=>{
    Payment_Details.find().then((Payment_Details)=>{
        res.json(Payment_Details)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/view_Payment/:id" , async(req,res)=>{
    const onePayment_Details = Payment_Details.findOne({_id:req.params.id} , function(err , result){
        if(err){
            res.json({"err":err})
        }else{
            res.json({"result":result})
        }
    })


})



router.route("/update_Payment_Details/:ID").put(async(req,res)=>{
    let Pay_ID = req.body.ID;
    const {BanK_Owner_Name} = req.body;
    const {Pay_date} = req.body;

    const {BanKName} = req.body;
    const {Card_No} = req.body;
    const {Expiry} = req.body;
    const {Cvv} = req.body;


 

    const Update = {
        BanK_Owner_Name,
        Pay_date,

        BanKName,
        Card_No,
        Expiry,
        Cvv,


     

    }

    const update = await Payment_Details.findByIdAndUpdate(Pay_ID, Update).then(()=>{
        res.status(200).send({status: "Payment Details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating", error: err.message});
    })
})






router.route("/delete/:id").delete(async(req,res)=>{
    const id = req.params.id;

    await Payment_Details.findByIdAndRemove(id).exec().then(()=>{
        res.status(200).send({status: "Payment Details deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting Payment Details", error: err.message});
    })
})

module.exports = router;
    


