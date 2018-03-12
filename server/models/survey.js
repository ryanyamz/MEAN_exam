const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  question: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  option_1: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    // votes: Number,
  },
  vote1: Number,
  option_2: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    // votes: Number,
  },
  vote2: Number,
  option_3: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    // votes: Number,
  },
  vote3: Number,
  option_4: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    // votes: Number,
  },
  vote4: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);
