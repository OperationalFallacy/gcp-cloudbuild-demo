
# Create GitHub trigger

gcloud builds triggers create github \
  --name=cbt-nodejs-demo \
  --repository=projects/skylab-contino/locations/us-central1/connections/github-operationalfallacy/repositories/gcp-codebuild-demo \
  --branch-pattern=main \
  --build-config=codebuild.yaml \
  --region=us-central1

gcloud builds triggers create github --name="deploy-to-dev" \
    --repo-owner="OperationalFallacy" \
    --repo-name="gcp-codebuild-demo" --branch-pattern="main" \
    --build-config="cloudbuild.yaml"
