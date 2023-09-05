# GCP Cloud Build with Config Connector

This is a demo project. The purpose to show how to create a build configuration for Cloud Build with Infrastructure-as-Code approach. We used Config Connector to create and manage Cloud Build.

For maximum flexibility of building and deploying software, the project has separated configurations for infrastructure (`codebuild-github.yaml`) and the build (`src/cloudbuild.yaml`).

Cloud Build will use the build configuration automatically when user triggers builds.

# Prerequisites

There is a minimum set of requirements:

- glcoud cli
- kubectl cli

# Create configuration

First, configure GitHub repository connection so Cloud Build trigger can reference it. This is a manual step since user may need to authenticate access to its repository via standard oAuth flow.

Create infrastructure:

`gcloud config set project project-name`

`kubectl apply -f codebuild-github.yaml` - this will create Cloud Build resources (the trigger)

Push commits and the Cloud Build will execute them.

# Notable features

The configuration is completely serverless.

We manage infrastructure with code.

Deployments will not require any credentials, all permissions can be assigned to a custom service account we configure for Cloud Build.

Finally, Cloud Build has great integration with GitHub, it streams build logs, live build status, and the build completion status updates directly to the commits.

# TODO

Configure Pull Request triggers and check what kind of status updates Cloud Build can post.