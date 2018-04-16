const express = require('express')
const Watson = require('./watson/index.js');

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

// Bootstrap application settings
require('./config/express')(app);
// Bootstrap the application routes
require('./routes/watson')(app, watson);

let server = app.listen(8080, () => {
   let port = server.address().port

   console.log("Server is listening at http://localhost:%s", port)
});
