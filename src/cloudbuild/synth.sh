#!/bin/bash

env

yarn --version || true

echo node_modules/.bin/cdk8s
node_modules/.bin/cdk8s synth --check-upgrade false || true

echo cdk8s bare
cdk8s synth --check-upgrade false || true

echo yarn
yarn cdk8s synth --check-upgrade false || true

