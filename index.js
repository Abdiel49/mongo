const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./src/config/dbConfig');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
console.log('dbCOnfig', dbConfig);

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  user: dbConfig.user,
  pass: dbConfig.pwd,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.log(err));

app.get('/', (_, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
