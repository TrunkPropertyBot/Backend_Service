module.exports = (app, watson) => {
  app.post('/message', (req, res) => {
    const message = req.body.message;
    watson.assistant.message(message, (text) => {
      return res.json({output: {text: text}});
      });

  });
}
