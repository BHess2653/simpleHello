const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/webhook', (req, res) => {
  res.send('GOT IT');
  console.log(req.body);
});

const port = process.env.PORT || 3333;

app.listen(port, ()=>{
  console.log('server is active on port ' + port);
});
