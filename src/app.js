const express = require('express')
const bodyParser = require('body-parser');

let app = express()

app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/message', (req, res) => {
  console.log("Message Received: " + req.body.message);
});

let server = app.listen(8080, () => {
   let port = server.address().port

   console.log("Server is listening at http://localhost:%s", port)
});
