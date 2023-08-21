const Product = require('../../models/product');

module.exports = {
  createProduct,
}

async function createProduct(req, res) {
  console.log(`body ${JSON.stringify(req.body)}`)
  try {
    const product = await Product.create(req.body);
    res.json(product);
    console.log(`Product is working ${product}`);
  }
  catch (err) {
    console.log(`This is the req.body ${JSON.stringify(req.body)}`);
    res.status(400).json(err);
    console.log('This no working')
  }
}
