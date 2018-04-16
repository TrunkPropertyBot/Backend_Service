# Backend_Service
This node.js webserver will handle all the backend logic of our chatbot

## Overview
For now this is a very basic repo which we will build on and refactor a lot.
Currently it is set up with 2 major coponents:
1) A Node.js Webserver which runs using the express framework which will hold the business logic and do all the calls to watson and handle the responses
2) A simple command line interface (cli) app which acts as a chatbot and takes in text and sends http requests to our locally running webserver to receive a response

The webserver currently just logs everything to the console until I build a better picture of how we handle the logic and dataflow in my head - I'm pretty new to node.js and been awhile since I have done any serious development work :P...
