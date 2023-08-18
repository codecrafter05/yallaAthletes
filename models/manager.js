const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({

  dateOfBirth: {
    type: Date,
    required: true
  },

  nationality:{
    type: String,
    required: true
  },

  phone:{
    type: Number,
  },

  sport:{
    type: String,
    required: true
  },

  personalRecord:{
    type: Number,
  },

  achievements:{
    type: String,
  },

  socials:{
    type: {String},
    required: true
  },

  jobTitle:{
    type: String,
    required: true
  },

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

}, {
  timestamps: true
})

module.exports = mongoose.model('Manager', managerSchema);
