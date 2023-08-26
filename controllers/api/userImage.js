const userImage = require('../../models/userImage');
const cloudinary = require('../../config/cloudinary')

module.exports = {
  createImage,
  getImageForLoggedInUser,
  getImageForUser
}

async function createImage(req, res) {
  try {
    let uploadedResponse;

    if (req.body.photo) {
      // Upload image to Cloudinary
      uploadedResponse = await cloudinary.uploader.upload(req.body.photo, {});
    }

    // Create the product with Cloudinary image URL and cloudinaryId
    const image = await userImage.create({
      ...req.body,
      photo: uploadedResponse.url || "", // Set to empty string if no image
      cloudinaryId: uploadedResponse.public_id || "", // Set to empty string if no image
    });

    res.json(image);
    console.log("Image created:", image);
  } catch (err) {
    console.error("Error creating image:", err);
    res.status(400).json(err);
  }
}

async function getImageForLoggedInUser(req, res) {
  try {
    const image = await userImage.findOne({ user: req.user._id });
    res.json(image);
  } catch (err) {
    console.error("Error getting image:", err);
    res.status(400).json(err);
  }
}

async function getImageForUser(req, res) {
  try {
    const image = await userImage.findOne({ user: req.params.id });
    res.json(image);
  } catch (err) {
    console.error("Error getting image:", err);
    res.status(400).json(err);
  }
}