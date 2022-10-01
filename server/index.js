const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
const logger = require('./utils/logger');

let data = [];
let time = 0;
let available = true;

app.get('/', (req, res) => {
  if (available) {
    res.status(200).render('index');
  } else {
    res.status(429).render('notAvailable');
  }
  logger.info("GET request received");
})

app.post('/add', cors(), (req,res) => {
  if (time == 0) {
    if (req.body.drinkType == 'Beer') {
      time = 2500;
      available = false;
      updateTime(req.body);
    } else if (req.body.drinkType == 'Drink') {
      time = 5000;
      available = false;
      updateTime(req.body);
    }
  }
  logger.info("New order added");
});

const updateTime = order => {
  setTimeout(function () {
    data.push(order);
    time = 0;
    available = true;
  }, time)
}

app.get('/api', (req, res) => {
    res.send(data);
    logger.info("Api data sent");
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  logger.info("Server started");
});