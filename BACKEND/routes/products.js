const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const alert = require('alert');
const Mongoose = require('mongoose');
let Product = require("../models/product");

//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, 'backend/uploads');
    },

    filename : (req,file,cb) => {
        cb(null, Date.now() + file.originalname)
    }
    
});

const upload = multer({
    storage:storage,
    
}).single('image')


router.post('/add', upload, async(req,res)=>{

    const newProduct = new Product({

        productID: req.body,
        productName: req.body.productName,
        root: req.body.root,
        bNo: req.body.bNo,
        category: req.body.category,
        date: req.body.date,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.file.filename,
        unit: req.body.unit,
        size: req.body.size,
        
    })

    const totalNumberOfProductInDb = await Product.countDocuments()

    // convert number to string, so we can concatenate 0s easily...
    
        let numberToString = totalNumberOfProductInDb.toString()
    
    
    
        // If length of number string is less than 5 then add leading 0s in nuberToString
    
        if(numberToString.length < 5){
    
            for (let i = numberToString.length; i < 5; i++){
    
                numberToString = '0' + numberToString
    
            }
    
        }
    
        newProduct.productID = `BID${numberToString}`

    newProduct.save().then(()=>{
        alert('Product added successfully');
        res.redirect('http://localhost:3000/view');

    }).catch((err)=>{
        alert('Product already exists');
        res.redirect('http://localhost:3000/add');
        console.log(err);
    })

})



router.route("/view").get((req,res)=>{
    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:ID").put(async(req,res)=>{
    let productId = req.body.ID;
    const {productName} = req.body;
    const {root} = req.body;
    const {bNo} = req.body;
    const {category} = req.body;
    const {price} = req.body;
    const {quantity} = req.body;
    const {size} = req.body;

    const Update = {
        productName,
        root,
        bNo,
        category,
        price,
        quantity,
        size,
    }

    const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
        res.status(200).send({status: "Price updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    const id = req.params.id;

    await Product.findByIdAndRemove(id).exec().then(()=>{
        res.status(200).send({status: "Product deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting product", error: err.message});
    })
})


router.route("/update/quantity/:ID").put(async(req,res)=>{
    let productId = req.params.ID;
    const {quantity} = req.body;

    const Update = {
        quantity,
    }

    const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
        res.status(200).send({status: "Price updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating price", error: err.message});
    })
})

//search product based on the product date

router.post("/search-product", async (req, res) => {
    try {
        Product.find({
            date: {
                $gte: new Date(req.body.fromDate),
                $lt: new Date(req.body.toDate),
            },
        })
            .then((result) => {
                res.json(result);
            });
    } catch (error) {
        res.status(500).send({ message: error });
    }
});


module.exports = router;
    


