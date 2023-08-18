const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

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

  sportType:{
    type: String,
    required: true
  },

  personalRecord:{
    type: Number,
  },

  height:{
    type: Number,
    required: true
  },

  weight:{
    type: Number,
    required: true
  },

  achievements:{
    type: String,
  },

  socials:{
    type: {String},
    required: true
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Athlete', athleteSchema);
