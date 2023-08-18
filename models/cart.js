const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({

productRef:{
  type: Schema.Types.ObjectId,
  ref: 'Product'
},

bill:{
  type:Number,
  required:true
}
}, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema);
