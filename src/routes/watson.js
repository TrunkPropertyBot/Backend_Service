
module.exports = (app, watson) => {
  app.post('/message', (req, res) => {
    const message = req.body.message;
    console.log("Message Received: " + message);
    watson.assistant.message(
    {
      input: { text: message },
      workspace_id: "cf568e51-8d3a-43a1-9cba-c460c86362f2"
    },
    function(err, response) {
      if (err) {
        console.error(err);
        return res.json({ output: { text: "Something went wrong... :(" } });

      } else {
        console.log(JSON.stringify(response, null, 2));
        return res.json({ output: { text: response.output.text[0] } });
      }
    }
  );
  });
}
