#!/bin/bash

MONGO_PORT=27017
DATADIR=/opt/data
APPNAME=mongodb

sudo docker rm -f $APPNAME

sudo docker run \
  -d \
  --restart=always \
  --publish=$MONGO_PORT:$MONGO_PORT \
  --volume=$DATADIR/db:/data/db \
  --volume=$DATADIR/dump:/data/dump \
  --volume=$DATADIR/backup:/data/backup \
  --volume=$DATADIR/config/mongodb.conf:/mongodb.conf \
  --name=$APPNAME \
  --hostname=$APPNAME \
  mongo mongod -f /mongodb.conf


# db.createUser({user:'admin',pwd:'admin',roles:['dbAdmin']})