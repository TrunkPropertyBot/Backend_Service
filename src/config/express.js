const express = require('express')
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json({ limit: '1mb' }));
}
