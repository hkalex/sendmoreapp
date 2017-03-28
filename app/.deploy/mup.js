module.exports = {
  servers: {
    one: {
      host: '118.178.189.18',
      username: 'root',
      // pem:
      password: '925J@n3t'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'sendmoreapp',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://aliyun.sendmore.com.au',
      MONGO_URL: 'mongodb://localhost/meteor',
      PORT: 80
    },
    port: 80,

    //dockerImage: 'kadirahq/meteord',
    dockerImage: 'abernix/meteord:latest',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
