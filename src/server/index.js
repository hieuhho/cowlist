const express = require('express');
const app = express();

app.use(express.static(__dirname + '../dist'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });


app.get('/api/cows', (req, res) => {
  res.send('Hi!')
})

app.listen(8080, () => console.log('Server ready'));