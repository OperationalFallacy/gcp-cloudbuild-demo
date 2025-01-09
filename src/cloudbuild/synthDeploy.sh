#!/bin/bash

# set -eo pipefail

npx cdk8s synth --check-upgrade false
kubectl apply -f cdk8s-synth/*.yaml