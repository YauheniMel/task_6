const bodyParser = require('body-parser');
const express = require('express');
const { Router } = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const router = Router();

app.use(router);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
