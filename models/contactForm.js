const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({

  athleteRef: {
    type: Schema.Types.ObjectId,
    ref: 'Athlete'
  },

  managerRef: {
    type: Schema.Types.ObjectId,
    ref: 'Manager'
  },

  description: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('ContactForm', contactFormSchema);
