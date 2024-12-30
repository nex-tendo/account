const express = require('express');
const subdomain = require('express-subdomain');

const nnas = express.Router();

const DEVICES = require('./devices');

nnas.use('/v1/api/devices', DEVICES);

const router = express.Router();

router.use(subdomain('account', nnas));

module.exports = router;