import { typescript, YamlFile } from "projen";

const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: "main",
  name: "gcp-cloudbuild-demo",
  projenrcTs: true,
  github: false,
  description:
    "CDK app with Config Connector for building and deploying apps with Cloud Build",
  buildWorkflow: false,
  licensed: false,
  pullRequestTemplate: false,
  deps: ["cdk8s", "constructs", "cdk8s-cli"],
  tsconfig: {
    compilerOptions: {
      rootDir: 'src',
      outDir: 'lib'
    },
  },
  scripts: {
    synth:
      "npx cdk8s synth --check-upgrade false",
  },
  devDeps: ["ts-watch", "ts-node"],             /* Build dependencies for this module. */
});

new YamlFile(project, "cdk8s.yaml", {
  committed: true,
  editGitignore: true,
  obj: {
    language: "typescript",
    app: "ts-node src/index.ts",
    output: "cdk8s-synth",
    validations: [{
    package: '@datreeio/datree-cdk8s',
    class: 'DatreeValidation',
    version: '1.3.5',
    properties: {
      policy: 'cdk8s'}
  }]},
});

project.watchTask.reset();
project.watchTask.exec('npx tsc-watch --onSuccess src/synthDeploy.sh');
project.synth();
