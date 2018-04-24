const Assistant = require('./assistant.js');

class Watson {

  constructor(username = null, password = null) {
    if (!username) {
      if (!process.env.WATSON_WORKSPACE_USERNAME) {
        throw new Error("Env variable 'WATSON_WORKSPACE_USERNAME' must be set!");
      }
      username = process.env.WATSON_WORKSPACE_USERNAME;
    }
    if (!password) {
      if (!process.env.WATSON_WORKSPACE_PASSWORD) {
        throw new Error("Env variable 'WATSON_WORKSPACE_PASSWORD' must be set!");
      }
      password = process.env.WATSON_WORKSPACE_PASSWORD;
    }

    this.assistant = new Assistant(username, password, "cf568e51-8d3a-43a1-9cba-c460c86362f2");
  }
}

module.exports = Watson;
