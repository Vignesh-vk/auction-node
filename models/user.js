// models/user.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startingPrice: {
    type: Number,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  highestBid: {
    type: Number,
    default: 0
  },
  winningBidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const userSchema = new mongoose.Schema({
  email: { type: String },
  mobileNumber: { type: String },
  password: { type: String, required: true },
  listedItems: [itemSchema]
});

module.exports = mongoose.model('User', userSchema);
