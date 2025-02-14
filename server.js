const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/templates', require('./routes/templates'));
app.use('/sms', require('./routes/sms'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
