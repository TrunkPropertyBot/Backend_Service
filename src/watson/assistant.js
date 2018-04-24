const AssistantV1 = require('watson-developer-cloud/assistant/v1');

class Assistant {

  constructor(username, password, workspace_id) {

    this.api = new AssistantV1({
      username: username,
      password: password,
      url: 'https://gateway.watsonplatform.net/assistant/api/',
      version: '2018-02-16'
    });
    this.workspace_id = workspace_id;

  }

  message (message, callback) {
    this.api.message( { input: { text: message }, workspace_id: this.workspace_id }, (err, response) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log(JSON.stringify(response, null, 2));
        callback(response);
      }
    });
  }

}

module.exports = Assistant;
