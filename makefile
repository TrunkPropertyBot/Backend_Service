# deploys any code changes and serverless.yml changes
deploy-serverless:
	cd backend-service && serverless deploy

# A quicker deploy which doesn't use cloudformation and just packages your code and pushes it up to AWS
deploy-code-changes:
	cd backend-service && serverless deploy function -f app

# Run our server locally
run-locally:
	cd backend-service && serverless offline start
