#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DATADIR=/opt/data

APPNAME=sendmoreapp
PORT=3000

sudo docker rm -f $APPNAME

sudo docker run \
  -d \
  --restart=always \
  --publish=$PORT:$PORT \
  --volume=$DIR/bundle:/bundle/bundle \
  --volume=$DIR/kicker.sh:/bundle/kicker.sh \
  --volume=$DIR/settings-prod.json:/bundle/settings.json \
  --volume=$DATADIR/cfs:/bundle/cfs \
  --env-file=$DIR/env.list \
  --name=$APPNAME \
  --hostname=$APPNAME \
  --user=coder \
  hbapp/meteord:20161217 \
  bash /bundle/kicker.sh
