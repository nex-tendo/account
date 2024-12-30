const express = require('express');
const http = require('http');
const app = express();
const logger = require('./logger');
require('dotenv').config();

var httpServer = http.createServer(app);

httpServer.listen(process.env.HTTP_PORT, async () => {
    logger.success(`Account Server was started on port ${process.env.HTTP_PORT}`);
});