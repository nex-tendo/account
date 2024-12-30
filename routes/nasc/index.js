const express = require('express');
const subdomain = require('express-subdomain');

const nasc = express.Router();

const AC = require('./ac');

nasc.use('/ac', AC);

const router = express.Router();

router.use(subdomain('nasc', nasc));

module.exports = router;