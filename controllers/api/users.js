const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login, 
  checkToken,
  getUser,
  updateUser, 
  getUserImage,
  deleteUser
};

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

// get user data to display on profile page
async function getUser(req, res) {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
    console.log(JSON.stringify(user));
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    // Delete the user by ID
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
}

function getUserImage(req, res) {
  User.findById(req.params.userId)
  .then(user => {
    res.set('Content-Type', 'image/jpeg');
    res.send(user.photo);
  })
  .catch(err => {
    res.status(400).json(err);
  });
}


function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*-- Helper Functions --*/
function createJWT(user) {
  delete user.photo;
  
  const { ['photo']: omittedField, ...restOfObject } = user;
  
  const leanUser = {_id: user._id, email: user.email, name: user.name, role: user.role};
  return jwt.sign(
    // extra data for the payload
    { user: leanUser },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}
