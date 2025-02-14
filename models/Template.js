const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: String,
  message: String,
});

module.exports = mongoose.model('Template', templateSchema);
