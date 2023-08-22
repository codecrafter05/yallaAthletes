const Product = require('../../models/product');

module.exports = {
  createProduct,
  getProduct,
  deleteProduct
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

async function getProduct(req, res) {
  console.log('req.user:', req.user);
  try {
    const product = await Product.findOne({ product: req.product._id });
    console.log('Fetched product data:', product);
    res.json(athlete);
  } catch (err) {
    console.error('Error fetching product data:', err);
    res.status(400).json(err);
  }
}

async function deleteProduct(req, res) {
  try {
    await Athlete.findOneAndDelete({ product: req.product._id });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
}
