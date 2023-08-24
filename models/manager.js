const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  club:{
    type: String,
    required: true
  },

  country:{
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Manager', managerSchema);
