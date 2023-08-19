const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  firstName: { 
    type: String, 
    required: true 
  },

  lastName:{
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },

  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },

  avatar:{
    type: String
  },

  gender:{
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },

  dateOfBirth:{
    type: String,
    required: true
  },

  nationality:{
    type: String,
    required: true
  },

  phone:{
    type: Number,
    required: true
  },

  role:{
    type: String,
    enum: ['Customer','Athlete', 'Manager', 'Admin'],
    default: 'Customer'
  }

}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // the password is either new, or being updated
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);