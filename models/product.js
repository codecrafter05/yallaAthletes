const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  name:{
    type: String,
    required: true
  },

  type:{
    type: String,
    required: true
  },

  photo:{
    type: String,
    required: true
  },

  price:{
    type: Number,
    required: true,
  },

  quantity:{
    type: Number,
    required: true
  },

  description:{
    type: String,
    required: true
  },

  size:{
    type: String,
    enum:['S, M, L, XL, 40, 41, 42, 43, 44, 45, 46, 47, 48'],
    required: true
  },

  color:{
    type: String,
    enum:['Black, Beige, Blue, Green, White, Red, Yellow, Orange, Barbie'],
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema);
