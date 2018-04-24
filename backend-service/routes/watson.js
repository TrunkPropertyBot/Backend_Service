module.exports = (app, watson) => {
  app.post('/message', (req, res) => {
    const message = req.body.message;
    watson.assistant.message(message, (response) => {
      return res.json({output: {text: response.output.text[0]}});
      });

  });
}
