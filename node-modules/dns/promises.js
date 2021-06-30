'use strict';

const dnsPromises = require('/JS-Image-Recognition-Software/node-modules/internal/dns/promises');
dnsPromises.setServers = require('/JS-Image-Recognition-Software/node-modules/dns').setServers;
module.exports = dnsPromises;
