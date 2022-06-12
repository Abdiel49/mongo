const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  user: dbConfig.user,
  pass: dbConfig.pwd,
  autoIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.log('error on connect to mongodb', err));
