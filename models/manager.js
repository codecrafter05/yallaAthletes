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
<<<<<<< HEAD

=======
    type: String,
    required: true
>>>>>>> 0002ca51e910c88355e5d908c74468f7766e351e
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Manager', managerSchema);
