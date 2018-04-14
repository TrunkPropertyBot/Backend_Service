let stdin = process.openStdin();
const request = require('request');

stdin.addListener("data", function(d) {
  // note:  d is an object, and when converted to a string it will end with a linefeed. So we (rather crudely) account for that with toString() and then trim()
  let messageString = d.toString().trim();
  let options = {
    url: 'http://localhost:8080/message',
    json: { message: messageString}
  };
  request.post(options, (error, response, body) => {
      if (error) {
        console.error("Make sure the webserver is running we got an error...");
        console.log("Say something to Watson: ");
      }
      if (!error && response.statusCode == 200) {
        console.log(body);
        console.log("Say something to Watson: ");
      }
    });
});

console.log("Say something to Watson: ");
