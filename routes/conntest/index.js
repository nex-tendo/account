const express = require('express');
const subdomain = require('express-subdomain');

const conntest = express.Router();

conntest.get('/', async (req, res) => {
    res.set('Content-Type', 'text/html');
	res.set('X-Organization', 'Nintendo');

	res.send(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html>
            <head>
            <title>HTML Page</title>
            </head>
            <body bgcolor="#FFFFFF">
            This is test.html page
            </body>
            </html>
        `);
});

const router = express.Router();

router.use(subdomain('conntest', conntest));

module.exports = router;