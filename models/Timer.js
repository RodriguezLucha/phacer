const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  endTime: {
    type: String,
    required: true
  },
  intTime: {
    type: Date,
    required: false
  },
  handle: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Timer = mongoose.model('timer', TimerSchema);