#!/bin/bash

# This will be mounted into the docker. Please assume it will be run inside the docker!!

sudo chmod -R a+rw /bundle/cfs

export METEOR_SETTINGS=$(cat /bundle/settings.json)
export NODE_ENV=production

meteor node /bundle/bundle/main
