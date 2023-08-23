const Product = require('../../models/product');
const cloudinary = require('../../config/cloudinary')


module.exports = {
  createProduct,
  getProduct,
  deleteProduct
}

async function createProduct(req, res) {
  try {
    let uploadedResponse;

    if (req.body.photo) {
      // Upload image to Cloudinary
      uploadedResponse = await cloudinary.uploader.upload(req.body.photo, {});
    }

    // Create the product with Cloudinary image URL and cloudinaryId
    const product = await Product.create({
      ...req.body,
      photo: uploadedResponse.url || "", // Set to empty string if no image
      cloudinaryId: uploadedResponse.public_id || "", // Set to empty string if no image
    });

    res.json(product);
    console.log("Product created:", product);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(400).json(err);
  }
}


async function getProduct(req, res) {
  console.log('req.user:', req.user);
  try {
    const product = await Product.find();
    console.log('Fetched product data:', product);
    res.json(product);
  } catch (err) {
    console.error('Error fetching product data:', err);
    res.status(400).json(err);
  }
}


async function deleteProduct(req, res) {
  const productId = req.params.productId;
  console.log(productId);
  try {
    // Use the product ID to find and delete the product
    await Product.findOneAndDelete({ _id: productId });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
}
