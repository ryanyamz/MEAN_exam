const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surveys: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Survey'
    }
  ]
}, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);
