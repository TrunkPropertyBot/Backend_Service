const AssistantV1 = require('watson-developer-cloud/assistant/v1');

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

    this.assistant = new AssistantV1({
      username: username,
      password: password,
      url: 'https://gateway.watsonplatform.net/assistant/api/',
      version: '2018-02-16'
    });

  }
}

module.exports = Watson;
