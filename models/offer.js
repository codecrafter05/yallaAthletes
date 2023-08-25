const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  athlete:{
    type: Schema.Types.ObjectId,
    ref: 'Athlete'
  },

  athleteName:{
    type: String,
    required: true
  },

  athleteAge:{
    type: Number,
    required: true
  },

  sportType:{
    type: String,
    required: true
  },

  bid:{
    type: Number,
    required: true
  },

  description:{
    type: String,
    required: true
  },

  status:{
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Offer', offerSchema);
