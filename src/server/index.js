const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/public'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
app.get('/', (req, res) => {
  res.sendFile('/home/hieuho/Hack Reactor/hrr45-cowlist/public/index.html');
})


app.get('/api/cows', (req, res) => {
  res.send('Hi!')
})

app.listen(8080, () => console.log('Server ready'));