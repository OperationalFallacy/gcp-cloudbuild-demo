#!/usr/bin/env bash

echo "==========="
echo "Variables"
echo "User: ${_USER}"

echo "BUILD=$BUILD_ID",
echo "PROJECT_ID=$PROJECT_ID",
echo "PROJECT_NUMBER=$PROJECT_NUMBER",
echo "REV=$REVISION_ID",
echo "REPO_FULL_NAME=$REPO_FULL_NAME",
echo "BRANCH_NAME=$BRANCH_NAME",
echo "TRIGGER_BUILD_CONFIG_PATH=$TRIGGER_BUILD_CONFIG_PATH"

echo Hello $_USER
echo The trigger name for the build is $TRIGGER_NAME
echo We are building in $PROJECT_ID
echo "======="

echo project files
pwd
ls -al