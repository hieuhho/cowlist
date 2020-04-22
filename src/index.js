const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));


app.get('/api/cows', (req, res) => {
  res.send('Hi!')
})

app.listen(8080, () => console.log('Server ready'));