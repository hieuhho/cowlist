const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index')

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded());

app.get('/api/cows', (req, res) => {
  res.send('COW GET!')
  // return db.Cow.findAll();
})

app.post('/api/cows', (req,res) => {
  // req.body ({name: 'Milkshake', description: '...'} )
  // res.body({name: 'Milkshake', description: '...'})
  // add to database
  res.send('POST COWS')
})

app.listen(8080, () => console.log('Server ready'));