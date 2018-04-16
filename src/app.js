const express = require('express')
const bodyParser = require('body-parser');
const Watson = require('./watson.js');

let app = express()
let watson;
try {
  console.log("Loading Watson SDK...");
  watson = new Watson();
}
catch(e) {
  console.error(e.message);
  process.exit(1);
}


app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/message', (req, res) => {
  let message = req.body.message;
  console.log("Message Received: " + message);
  watson.assistant.message(
  {
    input: { text: message },
    workspace_id: "cf568e51-8d3a-43a1-9cba-c460c86362f2"
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);
});

let server = app.listen(8080, () => {
   let port = server.address().port

   console.log("Server is listening at http://localhost:%s", port)
});
