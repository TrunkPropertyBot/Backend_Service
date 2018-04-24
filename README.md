# Backend_Service
This node.js webserver will handle all the backend logic of our chatbot

## Overview
We have used the [serverless framework](https://serverless.com/framework/) which helps with packaging our app and deploying it to AWS lambda along with all the required resources inside of a cloudformation stack.

There are two major components

1) A Node.js Webserver which is defined inside of our *backend service*. This folder is a serverless *service*. The logic around how it is deployed is inside `serverless.yml` otherwise just treat it pretty much as a standard node project. We have used the express framework (A lightweight node.js webserver framework) - and this performs all the business logic and will do all the calls to watson and handle the responses

2) A simple command line interface (cli) app `cli.js` which acts as a local chatbot and takes in text and sends http requests to either our locally running webserver or our aws hosted server and receives a response. (Basically just use this for testing)

## Working with this Repo
The makefile will show you how to run locally and deploy our `backend-service`.

If you want to use cli.js you must either run `node cli.js local` or `node cli.js aws` which will define which endpoint it aims at
