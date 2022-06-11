const bodyParser = require('body-parser');
const express = require('express');
const { Router } = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const countMistakes = require('./helper/get-count-mistakes');
const generateMistakes = require('./helper/set-mistakes');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const router = Router();

app.use(router);

const ruData = path.resolve(__dirname, '../ru.json');
const enData = path.resolve(__dirname, '../en.json');
const deData = path.resolve(__dirname, '../de.json');

app.post('/api/data/:page', cors(), (req, res) => {
  const { page = 0 } = req.params;

  try {
    const { command } = req.body;
    const location = command.match(/\|l:[a-z]{2}/)[0].slice(3, 5);
    // eslint-disable-next-line no-nested-ternary
    const data =
      location === 'ru' ? ruData : location === 'en' ? enData : deData;

    const { moveCount, delCount, addCount } =
      countMistakes.getCountMistakes(command);

    fs.readFile(data, (err, r) => {
      if (err) throw new Error(err);

      const result = JSON.parse(r).slice(0, 20 + 10 * page);

      const resultByMistakes = result.map((item) =>
        generateMistakes.setMistakes(
          item,
          addCount,
          delCount,
          moveCount,
          location
        )
      );

      return res.status(200).send(resultByMistakes);
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.use(express.static(`${__dirname}./../build`));
app.use(express.static(`${__dirname}./../build/static/js`));
app.use(express.static(`${__dirname}./../build/static/css`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../build/index.html'));
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
