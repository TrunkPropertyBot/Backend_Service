module.exports = (app, watson) => {
  app.post('/message', (req, res) => {

    watson.assistant.message(message, (text) => {
      return res.json({output: {text: text}});
      });

  });
}
