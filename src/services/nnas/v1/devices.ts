import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/@current/status', async (request: express.Request, response: express.Response): Promise<void> => {
    const filePath = path.join(__dirname, '../files/status.xml');

    fs.readFile(filePath, 'utf8', (err, data) => {
      response.header('Content-Type', 'application/xml');
      response.send(data);
    });
});

export default router;