const Product = require('../../models/product');

module.exports = {
  createProduct,
  // editProduct,
}

async function createProduct(req, res) {
  console.log(`body ${JSON.stringify(req.body)}`)
  try {
    const product = await Product.create(req.body);
    await product.save();
    console.log(product);
  }

  catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

// async function editProduct(req, res) {
//   console.log(`body ${JSON.stringify(req.body)}`)
//   try {
//     const product = await Product.findById(req.body);
//     await product.save();
//     console.log(product);
//   }

//   catch (err) {
//     console.log(err)
//     res.status(400).json(err);
//   }
// }