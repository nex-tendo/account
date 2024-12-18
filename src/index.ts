import express, { Request, Response } from 'express';
import { Logger } from './logger';

const app = express();

const port = 7070;
app.listen(port, () => {
  Logger.info(`The server was listening on http://localhost:${port}`);
});