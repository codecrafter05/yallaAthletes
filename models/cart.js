const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: true
  }
});

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  total: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  },
  shippingAddress: {
    country: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    houseNo: {
      type: String,
      required: true
    },
    blockNo: {
      type: String,
      required: true
    },
    roadNo: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

cartSchema.methods.calculateTotal = function() {
  this.total = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

module.exports = mongoose.model('Cart', cartSchema);