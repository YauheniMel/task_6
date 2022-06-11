const bodyParser = require('body-parser');
const express = require('express');
const { Router } = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const router = Router();

app.use(router);

const ruData = path.resolve(__dirname, '../ru.json');
const enData = path.resolve(__dirname, '../en.json');
const deData = path.resolve(__dirname, '../de.json');

app.post('/api/data', (req, res) => {
  const { command } = req.body;
  const location = command.match(/\|l:[a-z]{2}/)[0].slice(3, 5);
  // eslint-disable-next-line no-nested-ternary
  const data = location === 'ru' ? ruData : location === 'en' ? enData : deData;

  fs.readFile(data, (err, r) => {
    if (err) throw new Error(err);

    const result = JSON.parse(r).slice(0, 10);
    res.status(200).send(result);
  });
  console.log(command);
  console.log(location);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
