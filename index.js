const Kinvey = require('kinvey-node-sdk');
const config = require('./config-example');

Kinvey.init(config.kinvey);

// optional code to test for successful connection
Kinvey.ping().then((response) => {
  console.log(`Kinvey Ping Success! Response: ${response.kinvey}`);
  }).catch((error) => {
    console.log(`Kinvey Ping Failed. Response: ${error.description}`);
  });

