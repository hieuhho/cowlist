const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index')

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded());
// app.use(express.json());

app.get('/api/cows', (req, res) => {
  db.Cow.findAll()
    .then((cows) => {
      res.status(200)
      res.send(cows)
      res.end()
    })
    .catch((err) => {
      res.end(err)
    })
})

app.post('/api/cows', (req,res) => {
  db.Cow.create(req.body.post)
    .then((cow) => {
      res.status(200)
      res.send(cow)
      res.end()
    })
    .catch((err) => {
      res.end(err)
    })
})

app.listen(8080, () => console.log('Server ready'));