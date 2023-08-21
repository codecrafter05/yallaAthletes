const Product = require('../../models/product');
const cloudinary = require('../../utils/cloudinary');

module.exports = {
  createProduct,
  // editProduct,
}

async function createProduct(req, res) {

  const {
    name,
    type,
    photo,
    price,
    quantity,
    description,
    size,
    color
  } = req.body;

  console.log(`body ${JSON.stringify(req.body)}`)
  try {
    const result = await cloudinary.uploader.upload(photo, {
      folder: "products",
      // width: 300,
      // crop: 'scale'
    })
    const product = await Product.create({
      name,
      type,
      photo: {
        public_id: result.public_id,
        url: result.secure_url
      },
      price,
      quantity,
      description,
      size,
      color
    });
    res.json(product);
    console.log(`Product is working ${product}`);
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