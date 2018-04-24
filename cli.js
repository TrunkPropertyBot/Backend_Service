let stdin = process.openStdin();
const request = require('request');

try{
  if (process.argv[2] === "aws") var url = "https://if6j7w7nk6.execute-api.ap-southeast-2.amazonaws.com/dev";
  if (process.argv[2] === "local") var url = "http://localhost:3000";
}
catch(e) {
  console.error(e);
  console.error('You must provide target server eg. "node cli.js local" or "node cli.js aws"');
  process.exit(1);
}

if (typeof url === 'undefined') {
  console.error('You must provide target server eg. "node cli.js local" or "node cli.js aws"');
  process.exit(1);
}

stdin.addListener("data", function(d) {
  // note:  d is an object, and when converted to a string it will end with a linefeed. So we (rather crudely) account for that with toString() and then trim()
  let messageString = d.toString().trim();
  let options = {
    url: `${url}/message`,
    json: { message: messageString}
  };
  request.post(options, (error, response, body) => {
      if (error) {
        console.error("Make sure the webserver is running we got an error...");
        console.log("Say something to Watson: ");
      }
      if (!error && response.statusCode == 200) {
        console.log(body.output.text);
        console.log("Say something to Watson: ");
      }
    });
});

console.log("Say something to Watson: ");
