const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index')

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/api/cows', (req, res) => {
  db.Cow.findAll()
    .then((cows) => {
      res.status(200)
      res.send(cows)
      res.end()
    })
    .catch((err) => {
      res.status(500)
      res.end(err)
    })
});

app.post('/api/cows', (req,res) => {
  db.Cow.create(req.body.post)
    .then((cow) => {
      res.status(200)
      res.send(cow)
      res.end()
    })
    .catch((err) => {
      res.status(500)
      res.end(err)
    })
});

app.put('/api/cows/:id', (req, res) => {
  cowID = path.basename(req.url);
  db.Cow.update(req.body.post , {
    where: {
      id: cowID
    }
  })
  .then(() => {
    return db.Cow.findAll()
  })
  .then((cows) => {
    res.status(200)
    res.send(cows)
    res.end()
  })
  .catch((err) => {
    res.status(500)
    res.end(err)
  })
});

app.delete('/api/cows/:id', (req, res) => {
  cowID = path.basename(req.url);
  db.Cow.destroy({
    where: {
      id: cowID
    }
  })
  .then(() => {
    return db.Cow.findAll()
  })
  .then((cows) => {
    res.status(200)
    res.send(cows)
    res.end()
  })
  .catch((err) => {
    res.status(500)
    res.end(err)
  })
});

let port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server ready'));