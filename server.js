const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
