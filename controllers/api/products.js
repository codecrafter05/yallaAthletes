const Product = require('../../models/product');

module.exports = {
  createProduct,
}

async function createProduct(req, res) {
  console.log(`body ${JSON.stringify(req.body)}`)
  try {
    const product = await Product.create(req.body);
    await product.save();
    console.log(product);
    res.redirect('/products')
  }

  catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}