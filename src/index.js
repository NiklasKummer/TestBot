const NiklasClient = require('./Structures/NiklasClient');
const config = require('../config.json');

const client = new NiklasClient(config);
client.start();
