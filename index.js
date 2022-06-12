require('./src/mongo');

const express = require('express');
const cors = require('cors');

// midelwares for express
const noteRoute = require('./src/routes/noteRoutes');
const notFound = require('./src/midelware/notFound');
const handleErrors = require('./src/midelware/handleErrors');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

// route midelware for express
app.use('/api/notes', noteRoute);

// midelware exceptions
app.use(notFound);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
