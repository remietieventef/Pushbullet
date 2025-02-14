const mongoose = require('mongoose');

const smsLogSchema = new mongoose.Schema({
  phoneNumber: String,
  status: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SmsLog', smsLogSchema);
