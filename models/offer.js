const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'Athlete'
  },

  athlete:{
    type: Schema.Types.ObjectId,
    ref: 'Athlete'
  },

  bid:{
    type: Number,
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
