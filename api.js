var Product = require('./tblProduct');
const dboperations = require('./dboperations');
const { reset } = require('nodemon');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const tblProduct = require('./tblProduct');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })


 //get Products api starts
router.route('/products').get((request,response)=>
{
    dboperations.getProducts()
    .then(result => {
        response.json(result[0]);
     })
})
 //get products api ends

 //get ProductById start
 router.route('/productbyid/:id').get((request,response)=>{

    dboperations.getProductById(request.params.id).then(result => {
       response.json(result[0]);
    })

})
 //get ProductById Ends

//  addproduct start
router.route('/addproduct').post((request,response)=>
{
    let product = {...request.body}

    dboperations.addProduct(product).then(result => {
       response.status(201).json(result);
    })

})
//  addproduct end

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Product api running at : ' + port);
