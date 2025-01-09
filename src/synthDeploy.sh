#!/bin/bash

set -eo pipefail

# yarn install
npx cdk8s synth --check-upgrade false
kubectl apply -f cdk8s-synth/*.yaml