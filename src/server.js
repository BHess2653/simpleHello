const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/webhook', (req, res) => {
  const { body } = req;
  const loginName = body.deployment.creator.login
  const repoName = body.deployment.repository_url
  const envName = body.deployment.environment
  console.log(`${loginName}, ${repoUsed}, ${envName}`);
  res.send('GOT IT');
});

const port = process.env.PORT || 3333;

app.listen(port, ()=>{
  console.log('server is active on port ' + port);
});
