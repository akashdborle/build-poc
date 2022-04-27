# NGINX 
Basic nginx index html webpage creation

This repository contains files to run a sample application on nginx and demonstrates a CI/CD process in action.

## The Docker file

1. Builds the nginx and uses alphine as base OS from scratch
2. Clones the source code of a sample web application (You can substitute that with your own git repo)

## The cloudbuild.yaml file

Contains configuration to use the Google Cloud Build service which
1. Builds the docker image in Google Cloud Platform
2. Pushes the container image in to Google Cloud Registry
3. Deploys the image to Google Cloud Run

