const Product = require('../../models/product');

module.exports = {
  createProduct,
}

async function createProduct(req, res){
  try{
    const product = await Product.create(req.body);
    console.log(product)
    }
  catch(err){
    console.log(err)
    res.status(400).json(err);
  }
}