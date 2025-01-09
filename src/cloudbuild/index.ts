import { Construct } from "constructs";
import { Chart, ChartProps } from "cdk8s";
import { CloudBuildTrigger } from "../imports/cloudbuild.cnrm.cloud.google.com";
import { PubSubTopic } from "../imports/pubsub.cnrm.cloud.google.com";
import { ArtifactRegistryRepository } from "../imports/artifactregistry.cnrm.cloud.google.com";
import { readFileSync } from "fs";
import { StorageBucket } from "../imports/storage.cnrm.cloud.google.com";
import { SourceRepoRepository } from "../imports/sourcerepo.cnrm.cloud.google.com";

export class CloudBuild extends Chart {
  private _readScriptContent(filePath: string): string {
    try {
      const content = readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("An error occurred while reading the file:", error);
      return "";
    }
  }

  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    const topic = new PubSubTopic(this, "Builds", {
      metadata: {
        namespace: "config-control",
        labels: { purpose: "cdk8s-cloudbuild" },
      },
    });

    const sourceRepo = new SourceRepoRepository(this, "cbRepo", {
      metadata: {
        namespace: "config-control",
        labels: { stack: "cloudBuild", purpose: "sourceRepo" },
      },
    })

    const cbBucket = new StorageBucket(this, "cdkArtifacts", {
      metadata: {
        namespace: "config-control",
        labels: { purpose: "cdk8s-cloudbuild" },
      },
      spec: {
        location: "us-central1",
        uniformBucketLevelAccess: true,
        // Custom name so we do not have to deal with randomized suffixes to upload images
        // resourceId: "cloudbuild",
      },
    });

    new ArtifactRegistryRepository(this, "cbImages", {
      metadata: {
        namespace: "config-control",
        labels: { purpose: "cdk8s-cloudbuild" },
      },
      spec: {
        location: "us-central1",
        format: "Docker",
        // Custom name so we do not have to deal with randomized suffixes to upload images
        resourceId: "cloudbuild",
        description:
          "We use this for Cloud Build images. Uploaded from gcr.io/cloud-builders/yarn and in the future custom ones.",
      },
    });

    console.log(topic)
    new CloudBuildTrigger(this, "DemoCB", {
      metadata: {
        namespace: "config-control",
      },
      spec: {
        description: "Cloud Build PoC with pub/sub trigger. Self mutation build.",
        location: "us-central1",
        // This is for manual start of the build, when you publish message
        // pubsubConfig: {
        //   topicRef: {
        //     name: topic.name,
        //   },
        // },

        //The repo and ref of the repository from which to build. This field is used only for those triggers that do tot respond to SCM evens. Triggers that respond to such events build source at whatever commit caused the event. This field is currently only used by Webhook, Pub/Sub, Manual, and Cron triggers.
        // One of 'trigger_template', 'github', 'pubsub_config' 'webhook_config' or 'source_to_build' must be provided.
        sourceToBuild: {
          repoType: "CLOUD_SOURCE_REPOSITORIES",
          ref: 'refs/heads/main',
          uri: `https://source.developers.google.com/p/skylab-contino/r/${sourceRepo.name}`,
        },
        triggerTemplate: {
          repoRef: {
            name: sourceRepo.name
          },
          branchName: "^main$"
        },
        tags: ["poc", "typescript", "cdk8s"],

        build: {
          options: {
            dynamicSubstitutions: true,
            machineType: 'E2_HIGHCPU_8'
          },
          step: [
            {
              // name: 'gcr.io/google.com/cloud-builders/yarn',
              name: "us-central1-docker.pkg.dev/skylab-contino/cloudbuild/npm",
              "env": [
                "BUILD=$BUILD_ID",
                "PROJECT_ID=$PROJECT_ID",
                "PROJECT_NUMBER=$PROJECT_NUMBER",
                "REV=$REVISION_ID",
                "REPO_FULL_NAME=$REPO_FULL_NAME",
                "BRANCH_NAME=$BRANCH_NAME",
                "TRIGGER_BUILD_CONFIG_PATH=$TRIGGER_BUILD_CONFIG_PATH",
                "_USER=PubSubTrigger_env"
              ],
              script: this._readScriptContent('src/cloudbuild/build-info.sh'),
              id: "BUILD_INFO",
            },
            {
              // name: 'gcr.io/google.com/cloud-builders/yarn',
              name: "us-central1-docker.pkg.dev/skylab-contino/cloudbuild/npm",
              entrypoint: "yarn",
              args: ["install"],
              id: "DEPENDENCIES",
            },
            {
              // name: 'gcr.io/google.com/cloud-builders/yarn',
              name: "us-central1-docker.pkg.dev/skylab-contino/cloudbuild/npm",
              entrypoint: "yarn",
              args: [ "ts-node", "--project", "tsconfig.dev.json", ".projenrc.ts" ],
              id: "PROJEN",
            },
            {
              allowFailure: true,
              name: "us-central1-docker.pkg.dev/skylab-contino/cloudbuild/npm",
              entrypoint: "yarn",
              args: [ "cdk8s", "synth" ],
              id: "SCIRPT_SYNTH",
            },
            {
              name: "gcr.io/cloud-builders/gke-deploy",
              args:[ "apply", "--cluster=krmapihost-config-controller-1","--location=us-central1", "--filename=cdk8s-synth"],
              id: "SELF_MUTATE",
            },
          ],
          artifacts: {
            objects: {
              location: `gs://${cbBucket.metadata.name}/$PROJECT_ID`,
              paths: ["cdk8s-synth/*.yaml"],
            },
          },
          substitutions: {
            // Will be replaced with PubSubTrigger_env
            _USER: "PubSubTrigger",
          },
        },
      },
    });
  }
}
