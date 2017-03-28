# sendmoreapp/app


## Background

This is the Meteor APP for `Sendmore Trading Pty Ltd` (`Sendmore`) in Australia (http://sendmore.com.au).

The source code is copy-righted by `Sendmore`. This source code is just for personal reference and you should not copy/use/distribute the source code or compiled version to others without permission from `Sendmore`.

## Prerequisite

This APP requires Meteor to build and run it. Please refer to [http://www.meteor.com](http://www.meteor.com) in order to install Meteor.

## Run from Source Code

After Meteor has been installed, you have to run the following command to build the APP.

```
  $ cd sendmoreapp/app
  $ meteor npm install
  $ meteor run
```

Remind that this is just the development run.

## Build from Source Code

This APP contains two parts: server side and Android side.

Server side will be built and packaged by the following command lines

```
  $ cd sendmoreapp/app
  $ meteor npm install
  $ meteor build ../builds/<version>.tar --server-only --server=http://server.domain.com
```

After the build is done, a tar file will be generated. You should use `scp` to copy the tar to the deployment server.

## Deploy to Server
After the tar generated, you have to copy to a server that contains docker. The tar file is only depending on Nodejs. 

We have to use node version 4.8 because that is the same version as the node inside Meteor.

Here is the command to deploy to a server

```
  $ # run the following command in the local computer
  $ scp <version>.tar <user>@<server>:~
```

The above command copies the tar to the server. You have to `ssh` to the server with the same user above.

```
  $ # Run in server
  $ (cd ~ && tar xf <version>.tar)
  $ sudo mv ~/bundle /opt/app/bundle
  $ cd /opt/app/bundle
  $ sudo docker run -it \
  --rm \
  --volume=/opt/app/bundle=/opt/app/bundle \
  --name=npmserver \
  node:4.8 \
  bash -c "(cd /opt/app/bundle/program/server && npm install)"
```

The following command will run the server on NodeJS.

```
  sudo docker run -d \
  --rm \
  --restart=always \
  --volume=/opt/app/bundle=/opt/app/bundle \
  --publish=3000:3000 \
  --name=appserver \
  node:4.8 \
  node /opt/app/bundle/main.js
```

