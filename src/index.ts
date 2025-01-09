import { App } from 'cdk8s';
import { CloudBuild } from '../src/cloudbuild';

const app = new App();

new CloudBuild(app, "CloudBuildPoC");

app.synth();
