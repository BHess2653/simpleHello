const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/webhook', (req, res) => {
  const { creator, repository_url, environment } = req.body.deployment;
  console.log(`${creator.login}, ${repository_url}, ${environment}`);
  res.send('GOT IT');
});

const port = process.env.PORT || 3333;

app.listen(port, ()=>{
  console.log('server is active on port ' + port);
});
