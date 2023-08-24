const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({

  manager:{
    type: Schema.Types.ObjectId,
    ref: 'Manager'
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
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Offer', offerSchema);
