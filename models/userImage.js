const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userImageSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  photo:{
    type: String,
    required: true
  },

  cloudinaryId:{
    type: String,
    required: true,
  },

}, {
  timestamps: true
})

module.exports = mongoose.model('userImage', userImageSchema);
