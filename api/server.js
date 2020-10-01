// const { bouncer } = require('./src/middlewares/error'); error middleware
const compression = require('compression');
const { errors } = require('celebrate');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(helmet());
server.use(compression());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.disable('x-powered-by');

require('./src/routes')(server);

// server.use(bouncer); // Error handling
server.use(errors());

module.exports = server;
