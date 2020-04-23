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
      console.log('cow: ', cow);
      res.status(200)
      res.send(cow)
      res.end()
    })
    .catch((err) => {
      console.log('err: ', err);
      res.status(500)
      res.end()
    })
});

app.put('/api/cows/:id', (req, res) => {

  cowID = path.basename(req.url);

  db.Cow.update(req.body , {
    where: {
      id: cowID
    }
  })
  .then(() => {
    console.log(`${req.body.name} feels different`)
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
  console.log('cowID: ', cowID);

  db.Cow.destroy({
    where: {
      id: cowID
    }
  })
  .then(() => {
    console.log('Chik-Fil-A\'s stocks plummeted')
    res.status(200)
    res.end()
  })
  .catch((err) => {
    res.status(500)
    res.end(err)
  })
});

let port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server ready'));